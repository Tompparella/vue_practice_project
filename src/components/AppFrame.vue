<script setup lang="ts"></script>

<template>
  <view class="base-frame">
    <slot />
  </view>
</template>

<style scoped lang="scss">
@import "../style/constants.scss";
.base-frame {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  background: $frameBackground;
  margin: auto;
  overflow: hidden;
  border: 2px solid grey;
}
@media (max-width: $mobileWidth) {
  .base-frame {
    width: 100vw;
    height: 100vh;
  }
}
@media (min-width: ($mobileWidth)) {
  .base-frame {
    min-width: $mobileWidth;
    max-width: ((calc((2 * $desktopWidth) / 3)));
    width: 90vw;
    height: 95vh;
  }
}
</style>
