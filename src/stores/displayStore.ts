import { ref } from "vue";
import { defineStore } from "pinia";

interface Content {
  text?: string;
  color?: string;
  image?: string;
}

export const useDisplayStore = defineStore("display", () => {
  const content = ref<Content[]>();
  const setContent = (value: Content[]) => {
    content.value = value;
  };

  return { content, setContent };
});
