import type { Tag } from "@/types";
import axios, { type AxiosError } from "axios";
import { Path } from "./path";
import { getTagImagePath } from "@/utils";
export const getTags = async (): Promise<Tag[]> => {
  try {
    const res = await axios.get(`${Path.Tags}`);
    const tagData: Tag[] = res.data;
    return tagData.map((tag) => ({
      ...tag,
      imageUrl: getTagImagePath(tag.imageUrl),
    }));
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
