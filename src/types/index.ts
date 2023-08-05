export { isUserData } from "./typeGuards";

// Account creation

export type AuthenticationData = {
  email: string;
  password: string;
  rePassword?: string;
};
export type InstitutionData = {
  id: number;
  name: string;
  imageUrl?: string;
};
export type UniversityData = InstitutionData & {};
export type GuildData = InstitutionData & {
  universityId: number;
};
export type GuildAndUniversityData = InstitutionData & {
  university: InstitutionData;
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

// Content

export type ContentType = "image" | "clip";

export type Creator = {
  id: number;
  username: string;
};

export type Tag = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

export type Content = {
  id: number;
  guild: InstitutionData & {
    university: InstitutionData;
  };
  tags: Tag[];
  title: string;
  url: string;
  type: ContentType;
  creator: Creator;
};
