<script setup lang="ts">
import { Input, Label, Button } from "@/components/common";
import { onMounted, ref, type Ref } from "vue";
import { useDisplayStore, useCommonStore } from "@/stores";
import type { AuthenticationData } from "@/types";
import { useTranslation } from "i18next-vue";

type Emits = {
  (e: "onLoginClick", data: AuthenticationData): void;
  (e: "onChangeView", data: "register"): void;
};
const emit = defineEmits<Emits>();

const { setLoginContent } = useDisplayStore();
const { setHeaderSubLabel } = useCommonStore();
const { t } = useTranslation();

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");

onMounted(() => {
  setHeaderSubLabel(t("authentication.login"));
  setLoginContent();
});

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
      @onPress="$emit('onChangeView', 'register')"
    />
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
