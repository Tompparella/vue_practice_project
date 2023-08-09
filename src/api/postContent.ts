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
  const weight = 1 / tags.length;
  tags.forEach((tag, index) => {
    data.append(`tagIds[${index}][id]`, tag.id.toString());
    data.append(`tagIds[${index}][weight]`, weight.toString());
  });
  for (const pair of data.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  try {
    const res = await axios.post(Path.ContentImage, data);
    const result = res.data;
    return result;
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
