import { getIdentity } from "@/api";
import { ref } from "vue";
import { useDisplayStore } from "@/stores/displayStore";
import { useRouter } from "vue-router";
import { useQuery } from "vue-query";
import { Path } from "@/router";

export const useCheckAuthQuery = () => {
  const displayStore = useDisplayStore();
  const router = useRouter();
  const enabled = ref<boolean>(true);

  return useQuery(
    "checkAuth",
    async () => {
      displayStore.setLoading(true);
      return await getIdentity();
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
        router.push(Path.Main);
      },
      onError: () => {
        router.push(Path.Authentication);
      },
    }
  );
};
