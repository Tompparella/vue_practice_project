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
h1,
h2,
h3 {
  transition: 0.3s all;
}
button {
  display: flex;
  background-color: $buttonOuter;
  border: none;
  width: 10rem;
  min-height: 3.5rem;
  padding: 0.5rem;
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
  flex: 1;
  display: flex;
  height: 100%;
  background-color: $lightBlue;
  border-radius: $borderSharp;
  justify-content: center;
  align-items: center;
}
</style>
