import { getContent } from "@/api";
import { useQuery } from "vue-query";
import { QueryId } from "./keys";
import type { Ref } from "vue";
type Props = {
  enabled: Ref<boolean>;
  guildId?: Ref<number | undefined>;
  universityId?: Ref<number | undefined>;
  index?: Ref<number | undefined>;
};
export const useGetContentQuery = ({
  enabled,
  guildId,
  universityId,
  index,
}: Props) => {
  return useQuery(
    [QueryId.GetContent, enabled, guildId, universityId, index],
    () =>
      getContent({
        guildId: guildId?.value,
        universityId: universityId?.value,
        index: index?.value,
      }),
    {
      onSuccess: () => {
        //
      },
      onError: () => {
        //
      },
      enabled: enabled.value !== undefined ? true : enabled,
    }
  );
};
