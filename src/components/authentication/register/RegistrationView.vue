<script setup lang="ts">
import { ref, type Ref } from "vue";
import { validateEmail, validatePassword } from "@/utils";
import { Input, Label } from "@/components/common";

const content: Ref<number> = ref(0);
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const rePassword: Ref<string> = ref("");

const verify = (): boolean => {
  if (password.value !== rePassword.value) {
    alert("Passwords don't match!");
    return false;
  }
  if (!validateEmail(email.value)) {
    alert("Please give a valid email");
    return false;
  }
  if (!validatePassword(password.value)) {
    alert(
      "Password must be at least 8 characters long, and must contain 1 capital letter, 1 special character, and 1 number"
    );
    return false;
  }
  return true;
};

const register = () => {
  if (verify()) {
    console.log(`${email.value} ${password.value} ${rePassword.value}`);
    content.value = 1;
  }
};
</script>

<template>
  <view class="container">
    <Label type="L" :label="$t('authentication.newAccount')" />
    <Label type="M" :label="$t('authentication.email')" />
    <Input v-model="email" />
    <Label type="M" :label="$t('authentication.password')" />
    <Input v-model="password" :secret="true" />
    <Label type="M" :label="$t('authentication.passwordVerify')" />
    <Input v-model="rePassword" :secret="true" />
    <button class="authenticationButton" @click="register">
      {{ $t("authentication.register") }}
    </button>
    <button class="authenticationButton" @click="register">
      {{ $t("authentication.goToLogin") }}
    </button>
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
