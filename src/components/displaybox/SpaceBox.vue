<script setup lang="ts"></script>

<template>
  <div class="space-container"></div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.space-container {
  display: flex;
  width: $headerHeight;
  height: $headerHeight;
  border-radius: $border;
  background: white;
  box-shadow: 1px 2px 4px 1px $shadowColor inset;
}
</style>
