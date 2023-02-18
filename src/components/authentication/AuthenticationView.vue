<script setup lang="ts">
import { Registration } from "./register";
import { Login } from "./login";
import { Settings } from "./settings";
import { ref, type Ref } from "vue";
import { View } from ".";

const currentContent: Ref<View> = ref(View.Login);
const changeView = (view: View) => (currentContent.value = view);
</script>

<template>
  <Registration v-if="currentContent == View.Register" />
  <Settings v-else-if="currentContent == View.Settings" />
  <Login @on-press="changeView" v-else-if="currentContent == View.Login" />
</template>
