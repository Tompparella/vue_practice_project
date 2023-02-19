<script setup lang="ts">
import { onMounted } from "vue";
import { AppFrame, AppHeader, Display } from "./components";
import { checkAuth } from "./utils";
onMounted(() => checkAuth());
</script>

<template>
  <AppFrame>
    <AppHeader />
    <Display />
    <router-view />
  </AppFrame>
</template>
