<script setup lang="ts">
import { Text } from "../common";
import Logo from "../../assets/images/logo_white.png";
</script>

<template>
  <div class="label-entry">
    <div class="card">
      <img :src="Logo" />
      <Text class="text" :label="'Testi'" :type="'S'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
img {
  margin-block: auto;
  margin-inline: 0.5rem;
  width: 4vh;
  height: 4vh;
}
.label-entry {
  user-select: none;
  position: relative;
  height: 4vh;
  transform: translateX(-10%) rotate(4deg);
  transition: 0.2s all ease;
  z-index: 1;
  &:hover,
  &:active {
    transform: scale(1.2);
    z-index: 2;
  }
}
.card {
  top: 0;
  position: absolute;
  background: white;
  border: 2px solid $borderColor;
  border-radius: $border;
  display: flex;
  height: 5vh;
  min-width: 125%;
  max-width: 150%;
}
.text {
  margin-block: auto;
  word-break: break-all;
}
</style>
