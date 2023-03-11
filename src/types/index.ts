export { isUserData } from "./typeGuards";

export type AuthenticationData = {
  email: string;
  password: string;
  rePassword?: string;
};
export type UniversityData = {
  name: string;
  id: string;
  logo: string;
};
export type GuildData = {
  name: string;
  id: string;
  logo: string;
};
export type FlairData = {
  username: string;
  guildId: number;
};
// New account
export type AccountData = AuthenticationData & FlairData;

// Existing account
export type UserData = Omit<AccountData, "rePassword"> & {
  id: number;
  guildId: number;
};
