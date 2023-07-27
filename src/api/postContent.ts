import type { Content } from "@/types";
import axios, { type AxiosError } from "axios";
import { Path } from "./path";
export const postContent = async ({
  title,
  tags,
  image,
}: Content): Promise<number> => {
  const data = new FormData();
  data.append("title", title);
  data.append("image", image);
  tags.forEach((tag) => data.append("tagIds", tag.id.toString()));
  console.log(data);
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
