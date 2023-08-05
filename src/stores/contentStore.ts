import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useGetContentQuery } from "@/hooks/queries";
import type { Content } from "@/types";
import { getContentClipPath, getContentImagePath } from "@/utils/getImagePath";

export const useContentStore = defineStore("content", () => {
  const enabled = ref<boolean>(true);
  const guildId = ref<number | undefined>(undefined);
  const universityId = ref<number | undefined>(undefined);
  const index = ref<number>(0);
  const selectedIndex = ref<number>(index.value);
  const contentData = useGetContentQuery({
    enabled,
    guildId,
    universityId,
    index,
  });
  const selectedContent = computed<Content | undefined>(() => {
    const content = contentData.data.value
      ? { ...contentData.data.value[selectedIndex.value] }
      : undefined;
    if (content) {
      content.url =
        content?.type === "image"
          ? getContentImagePath(content.url)
          : getContentClipPath(content.url);
    }
    return content;
  });

  const next = () => {
    const value = selectedIndex.value + 1;
    const maxValue = contentData.data.value?.length;
    if (maxValue !== undefined && value >= maxValue) {
      alert("You've reached the end of content!");
    } else {
      selectedIndex.value = value;
    }
  };

  const back = () => {
    const value = selectedIndex.value - 1;
    if (value < 0) {
      selectedIndex.value = 0;
    } else {
      selectedIndex.value = value;
    }
  };

  const like = () => {};

  const dislike = () => {};

  return {
    selectedContent,
    next,
    back,
  };
});
