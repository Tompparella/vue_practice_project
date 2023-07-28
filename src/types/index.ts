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

// Tag

export type Tag = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

// Content
export type Content = {
  id: number;
  guild: InstitutionData & {
    university: InstitutionData;
  };
  tags: Tag[];
  title: string;
  url: string;
};

export type ContentApiResponse = Content & {
  type: "image" | "clip";
  creator: UserData;
};
