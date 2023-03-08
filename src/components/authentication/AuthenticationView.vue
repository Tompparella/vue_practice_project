<script setup lang="ts">
import { Registration } from "./register";
import { Login } from "./login";
import { type Ref, shallowRef, onMounted } from "vue";
import { useCommonStore, useAccountStore } from "@/stores";
import { useTranslation } from "i18next-vue";
import { storeToRefs } from "pinia";
import { setUserToken } from "../../utils";

const options = {
  registration: Registration,
  login: Login,
};

const { t } = useTranslation();
const { setHeaderSubLabel, setHeaderLabel } = useCommonStore();
const accountStore = useAccountStore();
const { verifiedAccountData } = storeToRefs(accountStore);
const currentComponent: Ref = shallowRef(options.login);

onMounted(() => {
  // Bullshittery to make i18n initialize fully
  setTimeout(() => {
    setHeaderSubLabel(t("authentication.login"));
    setHeaderLabel(t("appName"));
  }, 100);
});

const handleRegister = () => {
  // Handle registration completion either here or in the registration component
  if (verifiedAccountData.value) {
    setUserToken(verifiedAccountData.value.username);
    alert("Registration complete!");
    currentComponent.value = options.login;
  }
};

const changeView = (data: "login" | "register") => {
  switch (data) {
    case "login":
      currentComponent.value = options.login;
      break;
    case "register":
      currentComponent.value = options.registration;
      break;
  }
};
</script>

<template>
  <component
    :is="currentComponent"
    @onRegisterClick="handleRegister"
    @onChangeView="changeView"
  />
</template>
