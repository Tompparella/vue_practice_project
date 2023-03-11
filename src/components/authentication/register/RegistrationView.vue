<script setup lang="ts">
import { onMounted, shallowRef } from "vue";
import { validateEmail, validatePassword } from "@/utils";
import { default as First } from "./RegistrationFirst.vue";
import { default as Second } from "./RegistrationSecond.vue";
import { useCommonStore, useRegistrationStore } from "@/stores";
import { useTranslation } from "i18next-vue";
import { storeToRefs } from "pinia";
import { useRegisterMutation } from "@/hooks/queries";

interface Emits {
  (e: "onChangeView", data: "login"): void;
}
const emit = defineEmits<Emits>();

const { t } = useTranslation();
const { setHeaderSubLabel } = useCommonStore();

onMounted(() => setHeaderSubLabel(t("authentication.newAccount")));

const options = {
  first: First,
  second: Second,
};

const currentPhase = shallowRef(options.first);
const registrationStore = useRegistrationStore();
const { accountData, verifiedAccountData } = storeToRefs(registrationStore);
const { mutate } = useRegisterMutation();

const verify = () => {
  const { email, password, rePassword } = accountData.value;
  if (password !== rePassword) {
    alert(t("authentication.passwordMatch"));
    return false;
  }
  if (!validateEmail(email)) {
    alert(t("authentication.emailValidity"));
    return false;
  }
  if (!validatePassword(password)) {
    alert(t("authentication.passwordRequirements"));
    return false;
  }
  return true;
};

const handleRegistrationClick = () => {
  switch (currentPhase.value) {
    case options.first:
      if (verify()) currentPhase.value = options.second;
      break;
    case options.second:
      if (verifiedAccountData.value) {
        mutate(verifiedAccountData.value);
      }
      break;
  }
};

const handleBackClick = () => {
  switch (currentPhase.value) {
    case options.first:
      emit("onChangeView", "login");
      break;
    case options.second:
      currentPhase.value = options.first;
      break;
  }
};
</script>

<template>
  <view class="container">
    <component
      :is="currentPhase"
      @onRegisterClick="handleRegistrationClick"
      @onBackClick="handleBackClick"
    />
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
