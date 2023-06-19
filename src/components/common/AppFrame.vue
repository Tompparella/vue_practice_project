<script setup lang="ts"></script>

<template>
  <div class="base-frame">
    <div class="app-frame">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.base-frame,
.app-frame {
  height: inherit;
  margin: auto;
}
.app-frame {
  display: flex;
  padding-inline: 1rem;
  flex-direction: column;
  border-radius: $border;
  background: $frameBackground;
  border: 5px solid $borderColor;
}
@media (max-width: $mobileWidth) {
  .base-frame {
    margin: auto;
  }
}
@media (min-width: ($mobileWidth)) {
  .base-frame {
    min-width: $mobileWidth;
    width: 50%;
    padding: 0.5rem;
  }
}
@media (min-width: ($desktopWidth)) {
  .base-frame {
    width: 33%;
  }
}
@media (min-height: ($desktopHeight)) {
  .base-frame {
    padding-block: 2rem;
  }
}
</style>
