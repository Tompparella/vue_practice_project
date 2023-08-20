<script setup lang="ts">
import { Image } from "./image";
import { New } from "./new";
import { Bottom } from "./bottom";
import { useCommonStore, useDisplayStore } from "@/stores";
import { watchEffect } from "vue";

const { setOptionsVisible } = useDisplayStore();
const { setHeaderLabel } = useCommonStore();

watchEffect(() => {
  setHeaderLabel(null);
  setOptionsVisible(true);
});
</script>

<template>
  <div class="main">
    <New />
    <Image />
    <Bottom />
  </div>
</template>

<style scoped lang="scss">
.main {
  flex: 7;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
</style>
