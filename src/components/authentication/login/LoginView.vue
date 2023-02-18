<script setup lang="ts">
import type { AuthenticationData } from "../types";
type Props = {
  authenticationData: AuthenticationData;
};
defineProps<Props>();
defineEmits(["onLoginClick"]);
</script>

<template>
  <view class="container">
    <h1 class="authenticationLabel">{{ $t("authentication.login") }}</h1>
    <h3 class="label">{{ $t("authentication.email") }}</h3>
    <input class="emailInput" />
    <h3 class="label">{{ $t("authentication.password") }}</h3>
    <input type="password" class="passwordInput" />
    <button @click="$emit('onLoginClick')">
      {{ $t("authentication.login") }}
    </button>
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
