<script setup lang="ts">
import { ref, type Ref } from "vue";

const content: Ref<number> = ref(0);
const username: Ref<string> = ref("");
const password: Ref<string> = ref("");
const rePassword: Ref<string> = ref("");

const register = () => {
  console.log(`${username.value} ${password.value} ${rePassword.value}`);
  content.value = 1;
};
</script>

<template>
  <view class="container">
    <h1 class="authenticationLabel">{{ $t("authentication.newAccount") }}</h1>
    <h3>{{ $t("authentication.email") }}</h3>
    <input v-model="username" class="emailInput" />
    <h3>{{ $t("authentication.password") }}</h3>
    <input v-model="password" type="password" class="passwordInput" />
    <h3>{{ $t("authentication.passwordVerify") }}</h3>
    <input v-model="rePassword" type="password" class="passwordInput" />
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
