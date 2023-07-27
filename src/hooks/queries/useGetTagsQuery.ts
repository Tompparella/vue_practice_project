import { useQuery } from "vue-query";
import { QueryId } from "./keys";
import { getTags } from "@/api";
import type { Ref } from "vue";

export const useGetTagsQuery = (enabled?: Ref<boolean>) => {
  return useQuery([QueryId.GetTags], getTags, {
    onSuccess: () => {
      //
    },
    onError: (err) => {
      // TODO: Add error message displayal to display
    },
    enabled: enabled ?? true,
  });
};
