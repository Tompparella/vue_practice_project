import type { Content } from "@/types";
import axios, { type AxiosError } from "axios";
import { Path } from "./path";
type Props = {
  universityId?: number;
  guildId?: number;
  pageParam?: number;
};
export const getContent = async ({
  universityId,
  guildId,
  pageParam = 0,
}: Props): Promise<Content[]> => {
  try {
    const res = await axios.get(Path.GetContent, {
      params: { guildId, universityId, index: pageParam },
    });
    const contentData: Content[] = res.data;
    return contentData;
  } catch (err) {
    const error = <AxiosError>err;
    if (error.response) {
      console.warn(
        `Error: ${error.response.status} : ${error.response.headers}`
      );
      console.warn(error.response.data);
    } else if (error.request) {
      console.warn(`Error: ${error.request.status} : ${error.request.headers}`);
      console.warn(error.request.data);
    } else {
      console.warn(`Error: ${error.message}`);
    }
    throw new Error(error.message);
  }
};