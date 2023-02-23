<script setup lang="ts">
import { Label } from ".";

type Props = {
  label: string;
  color?: "violet" | "green" | "cyan" | "lightBlue" | "lightGreen" | "blue";
  bold?: boolean;
};
interface Emits {
  (e: "onPress"): void;
}
defineProps<Props>();
defineEmits<Emits>();
</script>
<template>
  <button @click="$emit('onPress')">
    <div
      class="inner"
      :class="
        color === 'blue'
          ? 'lightBlue'
          : color === 'green'
          ? 'lightGreen'
          : undefined
      "
    >
      <Label :label="label" type="S" :color="color" />
    </div>
  </button>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
div,
h1 {
  transition: 0.3s all;
}
button {
  display: flex;
  background-color: $buttonOuter;
  border: none;
  width: 33%;
  min-height: 8vh;
  padding: 1.2vh;
  border-radius: $border;
  transition: 0.2s all;
  &:hover {
    background-color: $buttonOuterHover;
    box-shadow: 0 0 0 3px white;
  }
  &:hover div {
    background-color: $buttonHover;
  }
  &:hover h1 {
    color: $textHover;
  }
  &:active {
    background-color: $buttonHover;
  }
  &:active div {
    background-color: $buttonOuterHover;
  }
  &:active h1 {
    color: white;
  }
}
.inner {
  display: flex;
  width: 100%;
  background-color: $lightBlue;
  border-radius: $border;
  align-items: center;
  justify-content: center;
}
</style>
