<script setup lang="ts">
import { Registration } from "./register";
import { Login } from "./login";
import { ref, type Ref } from "vue";

enum View {
  Register = "register",
  Login = "login",
  Settings = "settings",
}
const currentContent: Ref<View> = ref(View.Login);
</script>

<template>
  <Registration v-if="currentContent == View.Register" />
  <Login v-else-if="currentContent == View.Settings" />
  <Login v-else-if="currentContent == View.Login" />
</template>
