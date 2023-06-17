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
    padding: 0.5rem 5rem;
  }
}
@media (min-width: ($desktopWidth)) {
  .base-frame {
    min-width: $desktopWidth;
    padding: 0.5rem 15rem;
  }
}
</style>
