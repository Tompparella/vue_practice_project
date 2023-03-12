import { login, type LoginData } from "@/api";
import { Path } from "@/router";
import { useDisplayStore, useUserStore } from "@/stores";
import { useMutation } from "vue-query";
import { useRouter } from "vue-router";

export const useLoginMutation = () => {
  const displayStore = useDisplayStore();
  const userStore = useUserStore();
  const router = useRouter();
  const mutation = useMutation("login", (data: LoginData) => login(data), {
    onMutate: () => {
      displayStore.setLoading(true);
    },
    onSettled: () => {
      displayStore.setLoading(false);
    },
    onSuccess: (data) => {
      userStore.setUserDataFromResponse(data);
      router.push(Path.Main);
    },
    onError: (e: any) => {
      console.warn(e);
      if (e.message === "credentials") {
        displayStore.setInvalidCredentialsContent();
      } else {
        displayStore.setLoginErrorContent();
      }
    },
  });
  return mutation;
};
