import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { AccountData, AuthenticationData, FlairData } from "../types";

const isValidAccountData = (
  data: AccountData | Partial<AccountData>
): data is AccountData => {
  const asserted = data as AccountData;
  return (
    !!asserted.email &&
    !!asserted.password &&
    !!asserted.rePassword &&
    !!asserted.username &&
    !!asserted.guildId
  );
};

export const useRegistrationStore = defineStore("registration", () => {
  const accountData = ref<Partial<AccountData>>({});

  const setAuthenticationData = (value: AuthenticationData) =>
    (accountData.value = { ...accountData.value, ...value });

  const setFlairData = (value: FlairData) =>
    (accountData.value = { ...accountData.value, ...value });

  const verifiedAccountData = computed<AccountData | null>(() =>
    isValidAccountData(accountData.value) ? accountData.value : null
  );

  return {
    setAuthenticationData,
    setFlairData,
    verifiedAccountData,
    accountData,
  };
});
