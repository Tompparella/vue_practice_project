import { getIdentity } from "@/api";
import { ref } from "vue";
import { useContentStore, useDisplayStore, useUserStore } from "../../stores";
import { useRouter } from "vue-router";
import { useQuery } from "vue-query";
import { Path } from "@/router";
import { QueryId } from "./keys";

export const useCheckAuthQuery = () => {
  const displayStore = useDisplayStore();
  const contentStore = useContentStore();
  const userStore = useUserStore();
  const router = useRouter();
  const enabled = ref<boolean>(true);

  return useQuery(
    [QueryId.CheckAuth],
    () => {
      displayStore.setLoading(true);
      return getIdentity();
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
      onSuccess: (data) => {
        userStore.setUserDataFromResponse(data);
        contentStore.enable();
        router.push(Path.Main);
      },
      onError: () => {
        contentStore.disable();
        router.push(Path.Authentication);
      },
    }
  );
};
