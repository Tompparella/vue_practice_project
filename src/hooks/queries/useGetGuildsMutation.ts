import { getGuilds } from "@/api";
import { useMutation } from "vue-query";

export const useGetGuildsMutation = () => {
  return useMutation(
    "getGuilds",
    async (universityId: number) => await getGuilds(universityId),
    {
      onSuccess: () => {
        //
      },
      onError: () => {
        //
      },
    }
  );
};
