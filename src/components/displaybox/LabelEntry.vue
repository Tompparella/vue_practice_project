<script setup lang="ts">
import { Text } from "../common";
import Logo from "../../assets/images/logo_white.png";
</script>

<template>
  <li class="label-entry">
    <div class="card">
      <img :src="Logo" />
      <Text
        class="text"
        :label="'Testitestitestittestitestitestit'"
        :type="'S'"
      />
    </div>
  </li>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
img {
  margin-block: auto;
  margin-inline: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;
}
.label-entry {
  user-select: none;
  position: relative;
  height: 2.5rem;
  transform: translateX(-35%) rotate(4deg);
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
  height: 3rem;
  width: 10rem;
}
.text {
  margin-block: auto;
  word-break: break-all;
}
</style>
