import axios, { type AxiosResponse, type AxiosError } from "axios";
import type { LoginData } from "./data";
import { Path } from "./path";
export const login = async (data: LoginData): Promise<AxiosResponse> => {
  try {
    const res = await axios.post(Path.Login, {
      data,
    });
    console.debug(res);
    return res;
  } catch (err: AxiosError) {
    if (err.response) {
      console.warn(
        `Error: ${err.response.status} : ${err.response.data} : ${err.response.headers}`
      );
    } else if (err.request) {
      console.warn(
        `Error: ${err.request.status} : ${err.request.data} : ${err.request.headers}`
      );
    } else {
      console.warn(`Error: ${err.message}`);
    }
    throw new Error(err.message);
  }
};
