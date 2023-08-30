<script setup lang="ts">
import { default as HoverOverlay } from "./HoverOverlay.vue";
type Props = {
  label?: string;
  image?: string;
};
defineProps<Props>();
</script>

<template>
  <div class="hover-container">
    <img :src="image" :placeholder="'Institution'" />
    <HoverOverlay :label="label" />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
@import "../../style/mixins.scss";
.hover-container {
  height: $headerHeight;
  width: $headerHeight;
  border-radius: $border;
  background: white;
  box-shadow: 1px 2px 4px 1px $shadowColor inset;
  @include hover-overlay;
}
img {
  margin: auto;
  height: inherit;
  width: inherit;
  object-fit: cover;
  border-radius: inherit;
  box-shadow: $smallImageShadow;
}
</style>
