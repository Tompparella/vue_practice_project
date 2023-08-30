import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useGetContentQuery, useRateContentMutation } from "@/hooks/queries";
import type { Content } from "@/types";

export const useContentStore = defineStore("content", () => {
  const enabled = ref<boolean>(false);
  const guildId = ref<number | undefined>(undefined);
  const universityId = ref<number | undefined>(undefined);
  const selectedIndex = ref<number>(0);
  const currentSpaceId = ref<number | undefined>(undefined);
  const contentData = useGetContentQuery({
    enabled,
    guildId,
    universityId,
  });

  const random = (_min: number, _max: number) => {
    const max = Math.floor(_max);
    const min = Math.ceil(_min);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const setCurrentSpace = (value: number) => (currentSpaceId.value = value);

  const enable = (value?: number) => {
    value && (currentSpaceId.value = value);
    enabled.value = true;
  };

  const disable = () => {
    currentSpaceId.value = undefined;
    enabled.value = false;
    contentData.remove.value();
  };

  const next = async () => {
    let value = selectedIndex.value + 1;
    const maxValue = contentData.data.value?.pages.flat().length;
    if (maxValue !== undefined && value >= maxValue) {
      contentData.fetchNextPage.value();
      if (value === maxValue) {
        value = random(0, maxValue - 1);
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
    const contentArray = contentData.data.value?.pages.flat();
    const content: Content | undefined =
      contentArray && contentArray.length > selectedIndex.value
        ? { ...contentArray[selectedIndex.value] }
        : undefined;
    return content;
  });

  const onFail = () => {
    alert("Failed to rate content"); // TODO: Create actual error handling
  };

  const like = () => {
    selectedContent.value
      ? rateContent({ content: selectedContent.value, rating: "like" })
      : onFail();
  };

  const dislike = () => {
    selectedContent.value
      ? rateContent({ content: selectedContent.value, rating: "dislike" })
      : onFail();
  };

  return {
    selectedContent,
    currentSpaceId,
    setCurrentSpace,
    like,
    dislike,
    next,
    back,
    enable,
    disable,
  };
});
