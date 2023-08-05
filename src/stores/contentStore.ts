import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useGetContentQuery, useRateContentMutation } from "@/hooks/queries";
import type { Content } from "@/types";
import { getContentClipPath, getContentImagePath } from "@/utils";

export const useContentStore = defineStore("content", () => {
  const enabled = ref<boolean>(true);
  const guildId = ref<number | undefined>(undefined);
  const universityId = ref<number | undefined>(undefined);
  const selectedIndex = ref<number>(0);
  const contentData = useGetContentQuery({
    enabled,
    guildId,
    universityId,
  });

  const next = () => {
    const value = selectedIndex.value + 1;
    const maxValue = contentData.data.value?.pages.flat().length;
    if (maxValue !== undefined) {
      if (value === maxValue) {
        contentData.fetchNextPage.value();
      } else if (value > maxValue) {
        return;
      }
    }
    selectedIndex.value = value;
  };

  const back = () => {
    const value = selectedIndex.value - 1;
    if (value < 0) {
      selectedIndex.value = 0;
    } else {
      selectedIndex.value = value;
    }
  };

  const { mutate: rateContent } = useRateContentMutation(next);

  const selectedContent = computed<Content | undefined>(() => {
    const content = contentData.data.value
      ? { ...contentData.data.value.pages.flat()[selectedIndex.value] }
      : undefined;
    if (content) {
      content.url =
        content?.type === "image"
          ? getContentImagePath(content.url)
          : getContentClipPath(content.url);
    }
    return content;
  });

  const like = () => {
    selectedContent.value
      ? rateContent({ content: selectedContent.value, rating: "like" })
      : alert("Failed to like content"); // TODO: Create actual error handling
  };

  const dislike = () => {
    selectedContent.value
      ? rateContent({ content: selectedContent.value, rating: "dislike" })
      : alert("Failed to dislike content"); // TODO: Create actual error handling
  };

  return {
    selectedContent,
    like,
    dislike,
    next,
    back,
  };
});
