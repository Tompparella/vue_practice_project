<script setup lang="ts">
import { Registration } from "./register";
import { Login } from "./login";
import { Settings } from "./settings";
import type { AuthenticationData } from "./types";
import { ref, type Ref, shallowRef, onMounted } from "vue";
import { useCommonStore } from "@/stores";
import { useTranslation } from "i18next-vue";

const options = {
  registration: Registration,
  login: Login,
  settings: Settings,
};
const { t } = useTranslation();
const common = useCommonStore();

onMounted(() => {
  common.setHeaderSubLabel(t("authentication.login"));
  common.setHeaderLabel(t("appName"));
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
const handleRegister = (data?: AuthenticationData) => {
  if (!data) {
    currentComponent.value = options.registration;
    common.setHeaderSubLabel(t("authentication.newAccount"));
  } else currentComponent.value = options.settings;
};
</script>

<template>
  <component
    :is="currentComponent"
    @onLoginClick="handleLogin"
    @onRegisterClick="handleRegister"
  />
</template>
