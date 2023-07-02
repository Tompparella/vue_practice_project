import type { UserData } from "./index";

export const isUserData = (data: unknown): data is UserData => {
  const userData = data as UserData;
  return (
    !!userData.email &&
    !!userData.guildId &&
    !!userData.id &&
    !!userData.username
  );
};
