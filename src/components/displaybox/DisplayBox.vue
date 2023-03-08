<script setup lang="ts">
import { storeToRefs } from "pinia";
import { default as SpaceBox } from "./SpaceBox.vue";
import { default as LabelView } from "./LabelView.vue";
import { default as ContentView } from "./ContentView.vue";
import { useDisplayStore } from "../../stores";
const display = useDisplayStore();
const { content, loading } = storeToRefs(display);
</script>

<template>
  <div class="container">
    <div class="display-box">
      <LabelView />
      <ContentView :loading="loading" :content="content" />
      <SpaceBox />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.container {
  flex: 1;
  display: flex;
}
.display-box {
  flex: 1;
  display: flex;
}
</style>
