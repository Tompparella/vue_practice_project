import { rateContent } from "@/api";
import { useMutation } from "vue-query";
import { MutationKey } from "./keys";
import type { Content, Rating } from "@/types";
import { useUserStore } from "@/stores";
import { useLogoutMutation } from "./useLogoutMutation";

type Props = {
  content: Content;
  rating: Rating;
};

export const useRateContentMutation = (callback: () => void) => {
  const userData = useUserStore();
  const { mutate: logout } = useLogoutMutation();
  const rate = async ({ content, rating }: Props): Promise<boolean> => {
    const userId = userData.userData?.id;
    if (userId === undefined) {
      logout();
    } else if (
      content.likes.includes(userId) ||
      content.dislikes.includes(userId)
    ) {
      throw new Error("You've already rated this content!");
    }
    return rateContent(content.id, rating);
  };
  const mutation = useMutation([MutationKey.RateContent], rate, {
    onSuccess: callback,
    onError: () => {
      //
    },
  });
  return mutation;
};
