<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { validateEmail, validatePassword } from "@/utils";
import { default as First } from "./RegistrationFirst.vue";
import { default as Second } from "./RegistrationSecond.vue";
import type { AccountData, AuthenticationData, FlairData } from "@/types";
import { t } from "i18next";

interface Emits {
  (e: "onRegisterClick", data: AccountData): void;
  (e: "onLoginClick"): void;
}

const emit = defineEmits<Emits>();

const options = {
  first: First,
  second: Second,
};

const currentPhase = shallowRef(options.first);
const authenticationData = ref<AuthenticationData>();

const verify = ({
  email,
  password,
  rePassword,
}: AuthenticationData): boolean => {
  if (password !== rePassword) {
    alert(t("authentication.passwordMatch"));
    return false;
  }
  if (!validateEmail(email)) {
    alert(t("authentication.emailValidity"));
    return false;
  }
  if (!validatePassword(password)) {
    alert(t("authentication.passwordRequirements"));
    return false;
  }
  return true;
};

const handleRegistrationClick = <T extends FlairData | AuthenticationData>(
  data: T
) => {
  if (currentPhase.value === options.first) {
    const authData = data as AuthenticationData;
    if (!authData.email) return;
    const { email, password, rePassword } = authData;
    if (verify(authData)) {
      console.log(`${email} ${password} ${rePassword}`);
      currentPhase.value = options.second;
      authenticationData.value = authData;
    }
  } else if (currentPhase.value === options.second) {
    const flairData = data as FlairData;
    if (
      flairData.guild.id &&
      flairData.university.id &&
      authenticationData.value?.email &&
      authenticationData.value?.password
    ) {
      const accountData = {
        ...authenticationData.value,
        ...flairData,
      };
      emit("onRegisterClick", accountData);
    } else {
      console.debug("Something went wrong registering new user");
    }
  }
};
const handleBackClick = () => {
  if (currentPhase.value === options.first) emit("onLoginClick");
  else if (currentPhase.value === options.second)
    currentPhase.value = options.first;
};
</script>

<template>
  <view class="container">
    <component
      :is="currentPhase"
      @onRegisterClick="handleRegistrationClick"
      @onBackClick="handleBackClick"
    />
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
