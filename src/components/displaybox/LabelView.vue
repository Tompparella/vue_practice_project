<script setup lang="ts">
import { default as LabelEntry } from "./LabelEntry.vue";
</script>

<template>
  <div class="label-container">
    <LabelEntry />
    <LabelEntry />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.label-container {
  display: flex;
  flex-direction: column;
  width: $headerHeight;
  min-height: $headerHeight;
}
</style>
