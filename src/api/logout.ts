import axios, { type AxiosResponse, type AxiosError } from "axios";
import { Path } from "./path";
export const logout = async (): Promise<AxiosResponse> => {
  try {
    const res = await axios.post(Path.Logout, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return res.data;
  } catch (err) {
    const error = <AxiosError>err;
    if (error.response) {
      console.warn(
        `Error: ${error.response.status} : ${error.response.headers}`
      );
      throw new Error("credentials");
    } else if (error.request) {
      console.warn(`Error: ${error.request.status} : ${error.request.headers}`);
      console.warn(error.request.data);
    } else {
      console.warn(`Error: ${error.message}`);
    }
    throw error;
  }
};
