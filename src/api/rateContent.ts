import axios, { type AxiosError } from "axios";
import { Path } from "./path";
import type { Rating } from "@/types";

export const rateContent = async (
  contentId: number,
  rating: Rating
): Promise<boolean> => {
  try {
    const res = await axios.patch(Path.RateContent, {
      data: { contentId, rating },
    });
    const success: boolean = res.data;
    return success;
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
