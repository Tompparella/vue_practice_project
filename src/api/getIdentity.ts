import axios, { type AxiosResponse } from "axios";
export const getIdentity = async (): Promise<AxiosResponse> => {
  const res = await axios.get("/users/whoami");
  console.debug(res);
  return res;
};
