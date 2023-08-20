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
  const query = (page?: number) => {
    return getContent({
      guildId: guildId?.value,
      universityId: universityId?.value,
      pageParam: page,
    });
  };
  return useInfiniteQuery(
    [QueryId.GetContent, enabled, guildId, universityId],
    ({ pageParam }) => query(pageParam),
    {
      getNextPageParam: (_lastPage, pages) => {
        return pages.flat().length;
      },
      enabled: enabled.value !== undefined ? true : enabled,
      staleTime: Infinity,
    }
  );
};
