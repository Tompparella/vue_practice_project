<script setup lang="ts">
import { storeToRefs } from "pinia";
import { default as SpaceBox } from "./SpaceBox.vue";
import { default as LabelView } from "./LabelView.vue";
import { default as ContentView } from "./ContentView.vue";
import { useContentStore, useDisplayStore } from "../../stores";
import { watch } from "vue";
const displayStore = useDisplayStore();
const contentStore = useContentStore();

const { content, loading, optionsVisible } = storeToRefs(displayStore);
const { selectedContent } = storeToRefs(contentStore);
// If new content is selected, clear shown text from display box to show content information
watch([selectedContent], () => {
  displayStore.clearTextContent();
});
</script>

<template>
  <div class="display-box">
    <LabelView :hidden="!optionsVisible" />
    <ContentView
      :hidden="!optionsVisible"
      :loading="loading"
      :textContent="content"
      :selectedContent="selectedContent"
    />
    <SpaceBox :hidden="!optionsVisible" />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.display-box {
  flex: 1;
  display: flex;
  align-items: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: 0.5vh;
}
.display-box::-webkit-scrollbar {
  display: none;
}
</style>
