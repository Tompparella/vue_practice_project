import { login, type LoginData } from "../../api";
import { Path } from "../../router";
import { useContentStore, useDisplayStore, useUserStore } from "../../stores";
import { useMutation } from "vue-query";
import { useRouter } from "vue-router";
import { MutationKey } from "./keys";

export const useLoginMutation = () => {
  const displayStore = useDisplayStore();
  const userStore = useUserStore();
  const contentStore = useContentStore();
  const router = useRouter();
  const mutation = useMutation(
    [MutationKey.Login],
    (data: LoginData) => login(data),
    {
      onMutate: () => {
        displayStore.setLoading(true);
      },
      onSettled: () => {
        displayStore.setLoading(false);
      },
      onSuccess: (data) => {
        userStore.setUserDataFromResponse(data);
        contentStore.enable();
        router.push(Path.Main);
      },
      onError: (e: any) => {
        console.warn(e);
        contentStore.disable();
        if (e.message === "credentials") {
          displayStore.setInvalidCredentialsContent();
        } else {
          displayStore.setLoginErrorContent();
        }
      },
    }
  );
  return mutation;
};
