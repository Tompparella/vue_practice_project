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
  width: 5vh;
  height: 5vh;
}
.label-entry {
  user-select: none;
  position: relative;
  width: 18vh;
  height: 5vh;
  transform: translateX(-40%) rotate(4deg);
  transition: 0.2s all ease;
  &:hover {
    transform: scale(1.2);
    z-index: 1;
  }
}
.card {
  top: 0;
  position: absolute;
  background: white;
  border: 2px solid $borderColor;
  border-radius: $border;
  display: flex;
  width: 100%;
  height: 6vh;
}
.text {
  margin-block: auto;
}
</style>
