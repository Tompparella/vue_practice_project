<script setup lang="ts">
import { Input, Label, Button } from "@/components/common";
import { ref, type Ref, watchEffect } from "vue";
import { useDisplayStore, useCommonStore } from "@/stores";
import { useTranslation } from "i18next-vue";
import { useLoginMutation } from "@/hooks/queries";
import type { LoginData } from "@/api";

type Emits = {
  (e: "onChangeView", data: "register"): void;
};
defineEmits<Emits>();

const { setLoginContent } = useDisplayStore();
const { setHeaderSubLabel } = useCommonStore();
const { t } = useTranslation();
const { mutate } = useLoginMutation();

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");

watchEffect(() => {
  setHeaderSubLabel(t("authentication.login"));
  setLoginContent();
});

const handleLoginClick = () => {
  const data: LoginData = {
    email: email.value,
    password: password.value,
  };
  mutate(data);
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
