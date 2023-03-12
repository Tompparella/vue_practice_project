import type { GuildData } from "@/types";
import axios, { type AxiosError } from "axios";
import { Path } from "./path";
export const getGuilds = async (universityId: number): Promise<GuildData[]> => {
  try {
    const res = await axios.get(Path.Guilds, { params: { universityId } });
    const guildData: GuildData[] = res.data;
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
