import axios, { type AxiosError, type AxiosResponse } from "axios";
import { Path } from "./path";
export const getIdentity = async (): Promise<AxiosResponse> => {
  try {
    const res = await axios.get(Path.Identify);
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
