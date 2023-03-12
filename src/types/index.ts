export { isUserData } from "./typeGuards";

export type AuthenticationData = {
  email: string;
  password: string;
  rePassword?: string;
};
export type InstitutionData = {
  id: number;
  name: string;
  logo?: string;
};
export type UniversityData = InstitutionData & {};
export type GuildData = InstitutionData & {
  universityId: number;
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
