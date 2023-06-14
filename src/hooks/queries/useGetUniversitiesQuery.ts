import { getUniversities } from "@/api";
import { ref } from "vue";
import { useDisplayStore } from "@/stores/displayStore";
import { useQuery } from "vue-query";
import { QueryId } from "./keys";

export const useGetUniversitiesQuery = () => {
  const displayStore = useDisplayStore();
  const enabled = ref<boolean>(true);

  return useQuery(
    [QueryId.Universities],
    async () => {
      displayStore.setLoading(true);
      return await getUniversities();
    },
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      enabled: enabled.value,
      retry: false,
      onSettled: () => {
        displayStore.setLoading(false);
        enabled.value = false;
      },
      onSuccess: () => {
        //
      },
      onError: () => {
        //
      },
    }
  );
};
