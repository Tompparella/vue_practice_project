<script setup lang="ts">
import { Text } from "@/components/common";
import { default as TagSelector } from "./TagSelector.vue";
</script>

<template>
  <div class="tag-box">
    <Text type="M" label="Give your meme at least one tag" />
    <div class="tag-row">
      <TagSelector />
      <TagSelector />
      <TagSelector />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
}
.tag-row {
  flex: 1;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
}
</style>
