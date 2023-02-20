// Only for development purposes

export const setUserToken = (value: string) =>
  localStorage.setItem("@token", value);

export const getUserToken = () => localStorage.getItem("@token");
