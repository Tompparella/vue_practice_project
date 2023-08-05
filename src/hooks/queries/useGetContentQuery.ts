import { getContent } from "@/api";
import { useInfiniteQuery } from "vue-query";
import { QueryId } from "./keys";
import type { Ref } from "vue";
type Props = {
  enabled: Ref<boolean>;
  guildId?: Ref<number | undefined>;
  universityId?: Ref<number | undefined>;
  pageParam?: Ref<number | undefined>;
};
export const useGetContentQuery = ({
  enabled,
  guildId,
  universityId,
}: Props) => {
  return useInfiniteQuery(
    [QueryId.GetContent, enabled, guildId, universityId],
    ({ pageParam }) =>
      getContent({
        guildId: guildId?.value,
        universityId: universityId?.value,
        pageParam,
      }),
    {
      getNextPageParam: (_lastPage, pages) => pages.flat().length,
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
