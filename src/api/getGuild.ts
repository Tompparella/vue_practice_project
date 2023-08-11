import type { GuildAndUniversityData } from "@/types";
import axios, { type AxiosError } from "axios";
import { Path } from "./path";
import { getInstitutionImagePath } from "@/utils";
export const getGuild = async (
  guildId: number | undefined
): Promise<GuildAndUniversityData | undefined> => {
  if (guildId === undefined) {
    return;
  }
  try {
    const res = await axios.get(`${Path.Guilds}/${guildId}`);
    const guildData: GuildAndUniversityData = res.data;
    return {
      ...guildData,
      imageUrl: getInstitutionImagePath(guildData.imageUrl),
      university: {
        ...guildData.university,
        imageUrl: getInstitutionImagePath(guildData.university.imageUrl),
      },
    };
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
