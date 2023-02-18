<script setup lang="ts">
import { Input, Label, Button } from "@/components/common";
import { ref, type Ref } from "vue";
import type { AuthenticationData } from "../types";
type Props = {
  authenticationData: AuthenticationData;
};
type Emits = {
  onLoginClick: (data: AuthenticationData) => void;
  onRegisterClick: (data: AuthenticationData) => void;
};
defineProps<Props>();
defineEmits<Emits>();
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
</script>

<template>
  <view class="container">
    <Label :type="'L'" :label="$t('authentication.login')" />
    <Label :type="'M'" :label="$t('authentication.email')" />
    <Input v-model="email" />
    <h3 class="label">{{ $t("authentication.password") }}</h3>
    <Input v-model="password" :secret="true" />
    <Button
      :color="'blue'"
      :label="$t('authentication.login')"
      :bold="true"
      @onPress="$emit('onLoginClick')"
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
