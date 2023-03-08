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
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.display-box {
  flex: 1;
  display: flex;
  align-items: flex-end;
}
</style>
