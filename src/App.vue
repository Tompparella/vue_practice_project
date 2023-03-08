<script setup lang="ts">
import { useQueryProvider } from "vue-query";
import { AppFrame, AppHeader, Display } from "./components";
import { useCheckAuthQuery } from "./hooks";
useQueryProvider();
useCheckAuthQuery();
</script>

<template>
  <AppFrame>
    <AppHeader />
    <Display />
    <router-view />
  </AppFrame>
</template>
