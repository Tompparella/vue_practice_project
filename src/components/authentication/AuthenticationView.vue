<script setup lang="ts">
import { Registration } from "./register";
import { Login } from "./login";
import { type Ref, shallowRef, onMounted } from "vue";
import { useCommonStore, useDisplayStore } from "@/stores";
import { useTranslation } from "i18next-vue";

const options = {
  registration: Registration,
  login: Login,
};

const { t } = useTranslation();
const { setHeaderSubLabel, setHeaderLabel } = useCommonStore();
const { setOptionsVisible } = useDisplayStore();
const currentComponent: Ref = shallowRef(options.login);

onMounted(() => {
  setOptionsVisible(false);
  // Bullshittery to make i18n initialize fully
  setTimeout(() => {
    setHeaderSubLabel(t("authentication.login"));
    setHeaderLabel(t("appName"));
  }, 1000);
});

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
  <component :is="currentComponent" @onChangeView="changeView" />
</template>
