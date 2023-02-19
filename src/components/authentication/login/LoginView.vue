<script setup lang="ts">
import { Input, Label, Button } from "@/components/common";
import { ref, type Ref } from "vue";
import type { AuthenticationData } from "../types";
type Emits = {
  (e: "onLoginClick", data: AuthenticationData): void;
  (e: "onRegisterClick", data: AuthenticationData): void;
};
const emit = defineEmits<Emits>();
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const handleLoginClick = () => {
  const data: AuthenticationData = {
    email: email.value,
    password: password.value,
  };
  emit("onLoginClick", data);
};
</script>

<template>
  <view class="container">
    <Label :type="'M'" :label="$t('authentication.email')" />
    <Input v-model="email" />
    <Label :type="'M'" :label="$t('authentication.password')" />
    <Input v-model="password" :secret="true" />
    <Button
      :color="'blue'"
      :label="$t('authentication.login')"
      :bold="true"
      @onPress="handleLoginClick"
    />
    <Button
      :color="'green'"
      :label="$t('authentication.newAccount')"
      @onPress="$emit('onRegisterClick')"
    />
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
