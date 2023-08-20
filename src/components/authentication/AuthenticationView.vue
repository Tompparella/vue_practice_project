<script setup lang="ts">
import { Registration } from "./register";
import { Login } from "./login";
import { type Ref, shallowRef } from "vue";
import { useCommonStore, useDisplayStore } from "@/stores";
import { useTranslation } from "i18next-vue";
import { watchEffect } from "vue";

const options = {
  registration: Registration,
  login: Login,
};

const { t } = useTranslation();
const { setHeaderSubLabel, setHeaderLabel } = useCommonStore();
const { setOptionsVisible } = useDisplayStore();
const currentComponent: Ref = shallowRef(options.login);

watchEffect(() => {
  setOptionsVisible(false);
  setHeaderSubLabel(t("authentication.login"));
  setHeaderLabel(t("appName"));
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
  <view class="container">
    <component :is="currentComponent" @onChangeView="changeView" />
  </view>
</template>

<style lang="scss" scoped>
.container {
  flex: 8;
  display: flex;
  justify-content: center;
}
</style>
