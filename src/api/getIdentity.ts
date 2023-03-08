import axios, { type AxiosResponse } from "axios";
import { Path } from "./path";
export const getIdentity = async (): Promise<AxiosResponse> => {
  try {
    const res = await axios.get(Path.Identify);
    console.debug(res);
    return res;
  } catch (err: AxiosError) {
    if (err.response) {
      console.warn(`Error: ${err.response.status} : ${err.response.headers}`);
      console.warn(err.response.data);
    } else if (err.request) {
      console.warn(`Error: ${err.request.status} : ${err.request.headers}`);
      console.warn(err.request.data);
    } else {
      console.warn(`Error: ${err.message}`);
    }
    throw new Error(err.message);
  }
};
