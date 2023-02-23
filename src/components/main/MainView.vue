<script setup lang="ts">
import { Image } from "./image";
import { Bottom } from "./bottom";
</script>

<template>
  <div class="main">
    <view class="main">
      <Image />
      <Bottom />
    </view>
  </div>
</template>

<style scoped lang="scss">
.main {
  flex: 6;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
</style>
