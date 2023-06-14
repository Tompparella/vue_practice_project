import { getGuilds } from "@/api";
import { useMutation } from "vue-query";
import { QueryId } from "./keys";

export const useGetGuildsMutation = () => {
  return useMutation(
    [QueryId.GetGuilds],
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
