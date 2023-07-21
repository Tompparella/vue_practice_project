import { ref } from "vue";
import { defineStore } from "pinia";
import type { Tag } from "@/types";

export const useCreationStore = defineStore("creation", () => {
  const title = ref<string>("");
  const tags = ref<Tag[]>([]);
  const image = ref<File>();
  const setTitle = (value: string) => {
    title.value = value;
  };
  const addTag = (value: Tag) => {
    if (tags.value.length < 3) {
      tags.value.push(value);
    }
  };
  const insertTag = (value: Tag, index: number) => {
    tags.value[index] = value;
  };
  const removeTag = (index: number) => {
    tags.value.splice(index, 1);
  };
  const setImage = (value: File) => {
    image.value = value;
  };

  return {
    title,
    tags,
    image,
    setTitle,
    addTag,
    insertTag,
    removeTag,
    setImage,
  };
});
