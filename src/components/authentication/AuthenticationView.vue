<script setup lang="ts">
import { Registration } from "./register";
import { Login } from "./login";
import { Settings } from "./settings";
import type { AuthenticationData } from "./types";
import { ref, shallowRef, type Ref } from "vue";

const options = {
  registration: shallowRef(Registration),
  login: shallowRef(Login),
  settings: shallowRef(Settings),
};

const currentComponent: Ref = ref(options.login);
const authenticationData: Ref<AuthenticationData> = ref({
  email: String,
  password: String,
  rePassword: String,
});
</script>

<template>
  <component :is="currentComponent" :authenticationData="authenticationData" />
</template>
