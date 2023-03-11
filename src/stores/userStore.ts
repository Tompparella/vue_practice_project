import { ref } from "vue";
import { defineStore } from "pinia";
import { type UserData, isUserData } from "../types";
import type { AxiosResponse } from "axios";

export const useUserStore = defineStore("user", () => {
  const userData = ref<UserData>();

  const setUserData = (value?: UserData) => (userData.value = value);
  const setUserDataFromResponse = (value?: AxiosResponse) => {
    console.log(value);
    if (!value) return;
    if (isUserData(value.data)) {
      setUserData(value.data);
    }
  };

  return {
    setUserData,
    setUserDataFromResponse,
    userData,
  };
});
