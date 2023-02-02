<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const increment = () => count.value++;
</script>

<template>
  <view>
    <h1>{{ $t("common.welcome") }}</h1>
    <h2>{{ count }}</h2>
    <button v-on:click="increment" />
  </view>
</template>
