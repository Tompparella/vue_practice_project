export { isUserData } from "./typeGuards";

export type Base = {
  id: number;
  created_at: Date;
  updated_at: Date;
};

export type Profiling = Base & {
  tag: Tag;
};

export type ContentProfiling = Profiling & {
  weight: number;
};

export type UserProfiling = Profiling & {
  liking: number;
  disliking: number;
};

export type InstitutionProfiling = UserProfiling & {};

// Account creation

export type AuthenticationData = {
  email: string;
  password: string;
  rePassword?: string;
};
export type InstitutionData = Base & {
  name: string;
  description: string;
  imageUrl?: string;
  profiling: InstitutionProfiling[];
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

export type Profile = Base & {
  description: string | null;
  imageUrl: string | null;
  username: string;
};

// Existing account
export type UserData = Base & {
  guildId: number;
  email: string;
  profile: Profile;
};

// Content

export type ContentType = "image" | "clip";

export type Rating = "like" | "dislike";

export type Creator = Omit<UserData, "guildId | email"> & {};

export type Tag = Base & {
  name: string;
  description: string;
  imageUrl: string | undefined;
};

export type Content = Base & {
  guild: InstitutionData & {
    university: InstitutionData;
  };
  profiling: ContentProfiling[];
  title: string;
  url: string;
  type: ContentType;
  creator: Creator;
  likes: number[];
  dislikes: number[];
};
