<script setup lang="ts">
import { AppFrame, AppHeader } from "./components";
import { checkAuth } from "./utils";
checkAuth();
</script>

<template>
  <AppFrame>
    <AppHeader />
    <router-view />
  </AppFrame>
</template>
