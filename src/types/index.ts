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
  guild: GuildData;
  university: UniversityData;
};
export type AccountData = AuthenticationData & FlairData;
