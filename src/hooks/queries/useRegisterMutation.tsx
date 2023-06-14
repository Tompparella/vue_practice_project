import { register } from "@/api";
import { Path } from "@/router";
import { useDisplayStore, useUserStore } from "@/stores";
import type { AccountData } from "@/types";
import { useTranslation } from "i18next-vue";
import { useMutation } from "vue-query";
import { useRouter } from "vue-router";
import { MutationKey } from "./keys";

export const useRegisterMutation = () => {
  const displayStore = useDisplayStore();
  const userStore = useUserStore();
  const { t } = useTranslation();
  const router = useRouter();
  const mutation = useMutation(
    [MutationKey.Register],
    (data: AccountData) => register(data),
    {
      onMutate: () => {
        displayStore.setLoading(true);
      },
      onSettled: () => {
        displayStore.setLoading(false);
      },
      onSuccess: (data) => {
        userStore.setUserDataFromResponse(data);
        // TODO: Possible new user introduction sequence
        router.push(Path.Main);
      },
      onError: (e: unknown) => {
        console.error(e);
        displayStore.setContent([
          { localizedText: t("authentication.registrationError") },
        ]);
      },
    }
  );
  return mutation;
};
