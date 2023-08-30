import { getGuild } from "@/api";
import { useQuery, type UseQueryReturnType } from "vue-query";
import { QueryId } from "./keys";
import type { Ref } from "vue";
import type { GuildAndUniversityData } from "@/types";

export const useGetGuildQuery = (
  enabled: Ref<boolean>,
  guildId?: Ref<number | undefined>
): UseQueryReturnType<GuildAndUniversityData | undefined, unknown> => {
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
