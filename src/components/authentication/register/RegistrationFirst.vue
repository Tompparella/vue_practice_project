<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { Input, Label, Button } from "@/components/common";
import type { AuthenticationData, FlairData } from "@/types";
import { useDisplayStore } from "@/stores";

interface Emits {
  (e: "onRegisterClick", data: FlairData | AuthenticationData): void;
  (e: "onBackClick"): void;
}

const emit = defineEmits<Emits>();

const { setRegistrationContent } = useDisplayStore();

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const rePassword: Ref<string> = ref("");

const handleRegistrationClick = () => {
  const data: AuthenticationData = {
    email: email.value,
    password: password.value,
    rePassword: rePassword.value,
  };
  emit("onRegisterClick", data);
};
onMounted(() => setRegistrationContent());
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

<style scoped lang="scss"></style>
