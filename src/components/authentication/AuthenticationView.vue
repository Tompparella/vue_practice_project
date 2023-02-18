<script setup lang="ts">
import { Registration } from "./register";
import { Login } from "./login";
import { Settings } from "./settings";
import type { AuthenticationData } from "./types";
import { ref, type Ref } from "vue";
import { View } from ".";

const options = {
  Registration,
  Login,
  Settings,
};
const currentComponent: Ref = ref(options.Login);
const authenticationData: Ref<AuthenticationData> = ref({
  email: String,
  password: String,
  rePassword: String,
});
</script>

<template>
  <component :is="currentComponent" :authenticationData="authenticationData" />
</template>
