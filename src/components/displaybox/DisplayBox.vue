<script setup lang="ts">
import { storeToRefs } from "pinia";
import { default as SpaceBox } from "./SpaceBox.vue";
import { default as LabelView } from "./LabelView.vue";
import { default as ContentView } from "./ContentView.vue";
import { useDisplayStore } from "../../stores";
const display = useDisplayStore();
const { content, loading, optionsVisible } = storeToRefs(display);
</script>

<template>
  <div class="display-box">
    <LabelView :hidden="!optionsVisible" />
    <ContentView
      :hidden="!optionsVisible"
      :loading="loading"
      :content="content"
    />
    <SpaceBox :hidden="!optionsVisible" />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.display-box {
  flex: 1;
  display: flex;
}
</style>
