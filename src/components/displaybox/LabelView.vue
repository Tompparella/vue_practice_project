<script setup lang="ts">
import { default as LabelEntry } from "./LabelEntry.vue";
const onIconPress = () => {};
</script>

<template>
  <div class="label-view">
    <i class="icon las la-tags" @click="onIconPress" />
    <div class="label-container">
      <LabelEntry />
      <LabelEntry />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
@import "../../style/mixins.scss";
.label-view {
  flex: 1;
}
.label-container {
  display: flex;
  flex-direction: column;
  min-height: $headerHeight;
}
.icon {
  @include display-icon;
}
</style>
