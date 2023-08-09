import type { Content } from "@/types";
import axios, { type AxiosError } from "axios";
import { Path } from "./path";
import {
  getContentClipPath,
  getContentImagePath,
  getInstitutionImagePath,
  getProfileImagePath,
  getTagImagePath,
} from "@/utils";
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
    contentData.forEach((entry) => {
      const valid = Boolean(entry.guild && entry.guild?.university);
      if (!valid) {
        console.error(
          `Server returned invalid content with either no guild or university assigned!\n\nContent:\n${JSON.stringify(
            entry
          )}`
        );
      }
    });
    return contentData.map((content) => {
      const {
        type,
        url,
        tags,
        guild,
        creator,
        guild: { university },
      } = content;
      return {
        ...content,
        url:
          type === "image" ? getContentImagePath(url) : getContentClipPath(url),
        guild: {
          ...guild,
          imageUrl: getInstitutionImagePath(guild.imageUrl),
          university: {
            ...university,
            imageUrl: getInstitutionImagePath(university.imageUrl),
          },
        },
        tags: tags.map((entry) => ({
          ...entry,
          imageUrl: getTagImagePath(entry.imageUrl),
        })),
        creator: {
          ...creator,
          imageUrl: getProfileImagePath(creator.imageUrl),
        },
      };
    });
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
