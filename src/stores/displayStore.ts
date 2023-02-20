import { ref } from "vue";
import { defineStore } from "pinia";
import {
  type Content,
  loginContent,
  registrationContent,
  institutionContent,
} from "./constants";

const getLoginContent = (): Content[] => {
  const index = Math.round(Math.random() * (loginContent.length - 1));
  return loginContent[index];
};
const getRegistrationContent = (): Content[] => {
  const index = Math.round(Math.random() * (registrationContent.length - 1));
  return registrationContent[index];
};

export const useDisplayStore = defineStore("display", () => {
  const content = ref<Content[]>();
  const setContent = (value: Content[]) => {
    content.value = value;
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

  return {
    content,
    setContent,
    setLoginContent,
    setRegistrationContent,
    setInstitutionContent,
  };
});
