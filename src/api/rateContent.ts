import axios, { type AxiosError } from "axios";
import { Path } from "./path";
import type { Rating } from "@/types";

export const rateContent = async (
  contentId: number,
  rating: Rating
): Promise<boolean> => {
  try {
    const res = await axios.patch(
      Path.RateContent,
      { contentId, rating },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    const success: boolean = res.data;
    return success;
  } catch (err) {
    const error = <AxiosError>err;
    if (error.response) {
      console.warn(`Error: ${error.message} : ${error.response.headers}`);
      throw new Error(JSON.stringify((error.response?.data as any)["message"]));
    } else if (error.request) {
      console.warn(`Error: ${error.request.status} : ${error.request.headers}`);
      console.warn(error.request.data);
    } else {
      console.warn(`Error: ${error.message}`);
    }
    throw new Error(error.message);
  }
};
