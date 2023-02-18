<script setup lang="ts">
import type { AuthenticationData } from "../types";
type Props = {
  authenticationData: AuthenticationData;
};
defineProps<Props>();
defineEmits(["onLoginClick", "onRegisterClick"]);
</script>

<template>
  <view class="container">
    <h1 class="authenticationLabel">{{ $t("authentication.login") }}</h1>
    <h3 class="label">{{ $t("authentication.email") }}</h3>
    <h3 class="label">{{ $t("authentication.password") }}</h3>
    <input type="password" class="passwordInput" />
    <button @click="$emit('onLoginClick')">
      {{ $t("authentication.login") }}
    </button>
    <button @click="$emit('onRegisterClick')">
      {{ $t("authentication.newAccount") }}
    </button>
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
