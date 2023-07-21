<script setup lang="ts">
interface Emits {
  (e: "onPress"): void;
}
defineEmits<Emits>();
</script>
<template>
  <button @click="$emit('onPress')">
    <div class="inner" />
    <i class="las la-trash"></i>
  </button>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
button {
  display: flex;
  position: absolute;
  right: 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
  transition: 0.3s all;
  background-color: $deepRed;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.2rem;
  border-radius: $borderSharp;
  &:hover {
    background-color: $ratingTrash;
  }
}
</style>
