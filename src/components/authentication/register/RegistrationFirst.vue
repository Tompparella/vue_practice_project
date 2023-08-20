<script setup lang="ts">
import { ref, type Ref, watchEffect } from "vue";
import { Input, Label, Button } from "@/components/common";
import type { AuthenticationData } from "@/types";
import { useDisplayStore, useRegistrationStore } from "@/stores";

interface Emits {
  (e: "onRegisterClick"): void;
  (e: "onBackClick"): void;
}

const emit = defineEmits<Emits>();

const { setRegistrationContent } = useDisplayStore();
const { setAuthenticationData } = useRegistrationStore();

watchEffect(() => setRegistrationContent());

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const rePassword: Ref<string> = ref("");

const handleRegistrationClick = () => {
  const data: AuthenticationData = {
    email: email.value,
    password: password.value,
    rePassword: rePassword.value,
  };
  setAuthenticationData(data);
  emit("onRegisterClick");
};
</script>

<template>
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
    @onPress="$emit('onBackClick')"
  />
</template>
