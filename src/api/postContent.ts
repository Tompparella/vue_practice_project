import axios, { type AxiosError } from "axios";
import { Path } from "./path";
import type { PostContentRequest } from "./data";
import type { Content } from "@/types";
export const postContent = async ({
  title,
  tags,
  image,
}: PostContentRequest): Promise<Content> => {
  const data = new FormData();
  data.append("title", title);
  data.append("image", image);
  tags.forEach((tag) => data.append("tagIds", tag.id.toString()));
  try {
    const res = await axios.post(Path.ContentImage, data);
    return res.data;
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
