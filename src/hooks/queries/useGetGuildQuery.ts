import { getGuild } from "@/api";
import { useQuery } from "vue-query";
import { QueryId } from "./keys";
import type { Ref } from "vue";

export const useGetGuildQuery = (
  enabled: Ref<boolean>,
  guildId?: Ref<number | undefined>
) => {
  return useQuery(
    [QueryId.GetGuild, enabled, guildId],
    () => getGuild(guildId?.value),
    {
      onSuccess: () => {
        //
      },
      onError: () => {
        //
      },
      enabled,
    }
  );
};
