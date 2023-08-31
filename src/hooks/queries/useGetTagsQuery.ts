import { useQuery } from "vue-query";
import { QueryId } from "./keys";
import { getTags } from "@/api";
import type { Ref } from "vue";
import { computed } from "vue";

export const useGetTagsQuery = (value?: Ref<boolean>) => {
  const enabled = computed(() => (value !== undefined ? value : true));
  return useQuery([QueryId.GetTags], getTags, {
    onSuccess: () => {
      //
    },
    onError: (err) => {
      // TODO: Add error message displayal to display
    },
    enabled: enabled.value,
  });
};
