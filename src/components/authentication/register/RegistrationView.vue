<script setup lang="ts">
import { ref, type Ref } from "vue";
import { validateEmail, validatePassword } from "@/utils";
import { Input, Label, Button } from "@/components/common";
import type { AuthenticationData } from "../types";
import { t } from "i18next";

interface Emits {
  (e: "onRegisterClick", data: AuthenticationData): void;
  (e: "onLoginClick", data: AuthenticationData): void;
}

const emit = defineEmits<Emits>();

const content: Ref<number> = ref(0);
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const rePassword: Ref<string> = ref("");

const verify = (): boolean => {
  if (password.value !== rePassword.value) {
    alert(t("authentication.passwordMatch"));
    return false;
  }
  if (!validateEmail(email.value)) {
    alert(t("authentication.emailValidity"));
    return false;
  }
  if (!validatePassword(password.value)) {
    alert(t("authentication.passwordRequirements"));
    return false;
  }
  return true;
};

const handleRegistrationClick = () => {
  if (verify()) {
    console.log(`${email.value} ${password.value} ${rePassword.value}`);
    content.value = 1;
  }
};
</script>

<template>
  <view class="container">
    <Label type="M" :label="$t('authentication.email')" />
    <Input v-model="email" />
    <Label type="M" :label="$t('authentication.password')" />
    <Input v-model="password" :secret="true" />
    <Label type="M" :label="$t('authentication.passwordVerify')" />
    <Input v-model="rePassword" :secret="true" />
    <Button
      :label="$t('authentication.register')"
      color="green"
      :bold="true"
      @onPress="handleRegistrationClick"
    />
    <Button
      :label="$t('authentication.goToLogin')"
      color="blue"
      @onPress="$emit('onLoginClick')"
    />
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
