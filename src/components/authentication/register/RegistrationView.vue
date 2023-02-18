<script setup lang="ts">
import { ref, type Ref } from "vue";
import { validateEmail, validatePassword } from "@/utils";
import type { AuthenticationData } from "../types";

type Props = {
  authenticationProps: AuthenticationData;
};
const content: Ref<number> = ref(0);
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const rePassword: Ref<string> = ref("");

const verify = () => {
  if (password.value !== rePassword.value) {
  }
  if (!validateEmail(email.value)) {
  }
  if (!validatePassword(password.value)) {
  }
};

const register = () => {
  console.log(`${email.value} ${password.value} ${rePassword.value}`);
  content.value = 1;
};
</script>

<template>
  <view class="container">
    <h1 class="authenticationLabel">{{ $t("authentication.newAccount") }}</h1>
    <h3>{{ $t("authentication.email") }}</h3>
    <input v-model="email" class="emailInput" />
    <h3>{{ $t("authentication.password") }}</h3>
    <input v-model="password" type="password" class="passwordInput" />
    <h3>{{ $t("authentication.passwordVerify") }}</h3>
    <input v-model="rePassword" type="password" class="passwordInput" />
    <button class="authenticationButton" @click="verify">Register</button>
    <button class="authenticationButton" @click="register">Go to Login</button>
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
