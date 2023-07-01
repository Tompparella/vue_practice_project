<script setup lang="ts">
import { Image } from "./image";
import { New } from "./new";
import { Bottom } from "./bottom";
import { onBeforeMount } from "vue";
import { useCommonStore, useDisplayStore } from "@/stores";

const { setOptionsVisible } = useDisplayStore();
const { setHeaderLabel } = useCommonStore();

onBeforeMount(() => {
  setHeaderLabel("");
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
