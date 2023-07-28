import type { ContentApiResponse, GuildAndUniversityData } from "@/types";
import axios, { type AxiosError } from "axios";
import { Path } from "./path";
type Props = {
  universityId?: number;
  guildId?: number;
  index?: number;
};
export const getContent = async ({
  universityId,
  guildId,
  index,
}: Props): Promise<ContentApiResponse | undefined> => {
  if (guildId === undefined && universityId === undefined) {
    // TODO: Error. Choose type
    return;
  }
  try {
    const res = await axios.get(Path.GetContent, {
      params: { guildId, universityId, index },
    });
    const guildData: ContentApiResponse = res.data;
    return guildData;
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
