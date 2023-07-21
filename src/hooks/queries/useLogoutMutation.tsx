import { logout } from "@/api";
import { Path } from "@/router";
import { useDisplayStore, useUserStore } from "@/stores";
import { useTranslation } from "i18next-vue";
import { useMutation } from "vue-query";
import { useRouter } from "vue-router";
import { MutationKey } from "./keys";

export const useLogoutMutation = () => {
  const displayStore = useDisplayStore();
  const userStore = useUserStore();
  const router = useRouter();
  const { t } = useTranslation();
  const mutation = useMutation([MutationKey.Logout], () => logout(), {
    onMutate: () => {
      displayStore.setLoading(true);
    },
    onSettled: () => {
      displayStore.setLoading(false);
    },
    onSuccess: () => {
      userStore.setUserData();
      router.push(Path.Authentication);
    },
    onError: (e: any) => {
      console.error(e);
      displayStore.setContent([
        { localizedText: t("authentication.logoutError") },
      ]);
    },
  });
  return mutation;
};
