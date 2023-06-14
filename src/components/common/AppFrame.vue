<script setup lang="ts"></script>

<template>
  <div class="base-frame">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.base-frame {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  border-radius: $border;
  background: $frameBackground;
  margin: auto;
  border: 5px solid $borderColor;
}
@media (max-width: $mobileWidth) {
  .base-frame {
    padding-inline: 0.5rem;
  }
}
@media (min-width: ($mobileWidth)) {
  .base-frame {
    min-width: $mobileWidth;
    width: 90vw;
    height: 99vh;
    padding-inline: 0.5rem;
  }
}
</style>
