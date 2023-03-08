import { getIdentity } from "@/api";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuery } from "vue-query";
import { Path } from "@/router";

export const useCheckAuthQuery = () => {
  const router = useRouter();
  const enabled = ref(true);
  return useQuery(["id", 1], async () => await getIdentity(), {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: enabled.value,
    onSuccess: () => {
      enabled.value = false;
      router.push(Path.Main);
    },
    onError: () => {
      enabled.value = false;
      router.push(Path.Authentication);
    },
  });
};
