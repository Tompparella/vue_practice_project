import { ref } from "vue";
import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const headerLabel = ref<string>("");
  const headerSubLabel = ref<string | null>();
  //const doubleCount = computed(() => count.value * 2);
  const setHeaderLabel = (value: string) => {
    headerLabel.value = value;
  };
  const setHeaderSubLabel = (value: string | null) => {
    headerSubLabel.value = value;
  };

  return { headerLabel, headerSubLabel, setHeaderLabel, setHeaderSubLabel };
});
