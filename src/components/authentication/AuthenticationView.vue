<script setup lang="ts">
import { Registration } from "./register";
import { Login } from "./login";
import type { AccountData, AuthenticationData } from "@/types";
import { ref, type Ref, shallowRef, onMounted } from "vue";
import { useCommonStore } from "@/stores";
import { useTranslation } from "i18next-vue";

const options = {
  registration: Registration,
  login: Login,
};
const { t } = useTranslation();
const common = useCommonStore();

onMounted(() => {
  // Bullshittery to make i18n initialize fully
  setTimeout(() => {
    common.setHeaderSubLabel(t("authentication.login"));
    common.setHeaderLabel(t("appName"));
  }, 100);
});

const currentComponent: Ref = shallowRef(options.login);
const authenticationData: Ref<AuthenticationData> = ref({
  email: "",
  password: "",
});
const handleLogin = (data?: AuthenticationData) => {
  if (!data) {
    currentComponent.value = options.login;
    common.setHeaderSubLabel(t("authentication.login"));
  } else authenticationData.value = data;
};
const handleRegister = (data?: AccountData) => {
  if (!data) {
    currentComponent.value = options.registration;
    common.setHeaderSubLabel(t("authentication.newAccount"));
  } else {
    // Handle registration completion either here or in the registration component
    console.debug(data);
    alert("Registration complete!");
    currentComponent.value = options.login;
  }
};
</script>

<template>
  <component
    :is="currentComponent"
    @onLoginClick="handleLogin"
    @onRegisterClick="handleRegister"
  />
</template>
