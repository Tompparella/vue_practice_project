import { ref } from "vue";
import { defineStore } from "pinia";
import {
  type DisplayContent,
  loginContent,
  registrationContent,
  institutionContent,
  invalidCredentialsContent,
  loginErrorContent,
} from "./constants";

const getLoginContent = (): DisplayContent[] => {
  const index = Math.round(Math.random() * (loginContent.length - 1));
  return loginContent[index];
};
const getRegistrationContent = (): DisplayContent[] => {
  const index = Math.round(Math.random() * (registrationContent.length - 1));
  return registrationContent[index];
};

export const useDisplayStore = defineStore("display", () => {
  const content = ref<DisplayContent[]>();
  const loading = ref<boolean>();
  const optionsVisible = ref<boolean>(false);
  const setContent = (value: DisplayContent[]) => {
    content.value = value;
  };
  const setLoading = (value: boolean) => {
    loading.value = value;
  };
  const setLoginContent = () => {
    content.value = getLoginContent();
  };
  const setRegistrationContent = () => {
    content.value = getRegistrationContent();
  };
  const setInstitutionContent = () => {
    content.value = institutionContent;
  };
  const setInvalidCredentialsContent = () => {
    content.value = invalidCredentialsContent;
  };
  const setLoginErrorContent = () => {
    content.value = loginErrorContent;
  };
  const setOptionsVisible = (value: boolean) => {
    optionsVisible.value = value;
  };

  return {
    content,
    loading,
    optionsVisible,
    setContent,
    setLoading,
    setLoginContent,
    setRegistrationContent,
    setInstitutionContent,
    setInvalidCredentialsContent,
    setLoginErrorContent,
    setOptionsVisible,
  };
});
