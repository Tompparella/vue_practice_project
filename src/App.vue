<script setup lang="ts">
import { watch } from "vue";
import { useQueryProvider } from "vue-query";
import { AppFrame, AppHeader, Display } from "./components";
import { useCheckAuthQuery } from "./hooks";
import { useDisplayStore } from "./stores";
useQueryProvider();
const { isLoading } = useCheckAuthQuery();
const displayStore = useDisplayStore();
watch(isLoading, (loading: boolean) => displayStore.setLoading(loading), {
  immediate: true,
});
</script>

<template>
  <AppFrame>
    <AppHeader />
    <Display />
    <router-view />
  </AppFrame>
</template>
