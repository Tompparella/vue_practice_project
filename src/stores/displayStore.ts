import { ref } from "vue";
import { defineStore } from "pinia";
import {
  type TextContent,
  loginContent,
  registrationContent,
  institutionContent,
  invalidCredentialsContent,
  loginErrorContent,
} from "./constants";

const getLoginContent = (): TextContent[] => {
  const index = Math.round(Math.random() * (loginContent.length - 1));
  return loginContent[index];
};
const getRegistrationContent = (): TextContent[] => {
  const index = Math.round(Math.random() * (registrationContent.length - 1));
  return registrationContent[index];
};

export const useDisplayStore = defineStore("display", () => {
  const content = ref<TextContent[]>();
  const loading = ref<boolean>();
  const optionsVisible = ref<boolean>(false);
  const setContent = (value: TextContent[]) => {
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
  const clearTextContent = () => (content.value = undefined);

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
    clearTextContent,
  };
});
