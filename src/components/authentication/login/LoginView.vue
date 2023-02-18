<script setup lang="ts">
import { View } from "..";

interface Emits {
  onPress: (view: View) => void;
}
defineEmits<Emits>();
</script>

<template>
  <view class="container">
    <h1 class="authenticationLabel">{{ $t("authentication.login") }}</h1>
    <h3 class="label">{{ $t("authentication.email") }}</h3>
    <h3 class="label">{{ $t("authentication.password") }}</h3>
    <input type="password" class="passwordInput" />
    <button @click="$emit('onPress', View.Main)" class="authenticationButton">
      {{ $t("authentication.login") }}
    </button>
    <button
      @click="$emit('onPress', View.Register)"
      class="authenticationButton"
    >
      {{ $t("authentication.newAccount") }}
    </button>
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
