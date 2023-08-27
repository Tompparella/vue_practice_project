<script setup lang="ts">
import { default as Text } from "./TextComponent.vue";
type Props = {
  label?: string;
};
defineProps<Props>();
// HOX! Using the overlay needs you to implement style hovers for elements affected (example: LogoPicker)
</script>

<template>
  <div class="hover-overlay">
    <Text class="overlay-text" :label="label ?? $t('common.choose')" type="S" />
  </div>
</template>

<style scoped lang="scss">
@import "../../style//constants.scss";
.hover-overlay {
  position: absolute;
  border-radius: inherit;
  width: inherit;
  height: inherit;
  background: $cyan;
  transition: 0.2s ease;
  transform: translate(0, -100%);
  opacity: 0;
}
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  user-select: none;
}
</style>
