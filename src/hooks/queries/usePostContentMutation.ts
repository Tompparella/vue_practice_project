import { postContent, type PostContentRequest } from "@/api";
import { useTranslation } from "i18next-vue";
import { useMutation } from "vue-query";
import { MutationKey } from "./keys";
import { useDisplayStore } from "@/stores";

export const usePostContentMutation = () => {
  const displayStore = useDisplayStore();
  const { t } = useTranslation();
  const query = async (
    value: PostContentRequest & { callback?: () => void }
  ) => {
    const result = await postContent(value);
    if (result.id && value.callback) {
      value.callback();
    }
  };
  const mutation = useMutation([MutationKey.PostContent], query, {
    onMutate: () => {
      displayStore.setLoading(true);
    },
    onSettled: () => {
      displayStore.setLoading(false);
    },
    onSuccess: () => {
      // TODO: Success message
    },
    onError: (e: any) => {
      console.error(e);
      // TODO: Actual error message
      displayStore.setContent([
        { localizedText: t("authentication.logoutError") },
      ]);
    },
  });
  return mutation;
};
