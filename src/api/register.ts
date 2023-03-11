import type { AccountData } from "@/types";
import axios, { type AxiosResponse, type AxiosError } from "axios";
import { Path } from "./path";
export const register = async (data: AccountData): Promise<AxiosResponse> => {
  try {
    console.log(data);
    const res = await axios.post(
      Path.Register,
      {
        email: data.email,
        username: data.username,
        guildId: data.guildId,
        password: data.password,
      },
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return res;
  } catch (err) {
    const error = <AxiosError>err;
    if (error.response) {
      console.warn(
        `Error: ${error.response.status} : ${error.response.headers}`
      );
    } else if (error.request) {
      console.warn(`Error: ${error.request.status} : ${error.request.headers}`);
    } else {
      console.warn(`Error: ${error.message}`);
    }
    throw error;
  }
};
