<script setup lang="ts">
type Props = {
  label: string;
  color?: "green" | "blue";
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
      <h1 class="label" :class="[color, { bold: bold }]">
        {{ label }}
      </h1>
    </div>
  </button>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
button {
  display: flex;
  background: $buttonOuter;
  border: none;
  width: 200px;
  min-height: 75px;
  padding: 13px;
  border-radius: 5px;
  transition: 0.1s all;
  &:hover {
    background: $buttonOuterHover;
  }
  &:hover div {
    background: $buttonHover;
  }
  &:hover h1 {
    color: $textHover;
  }
  &:active {
    background: $buttonHover;
  }
  &:active div {
    background: $buttonOuterHover;
  }
  &:active h1 {
    color: white;
  }
}
.inner {
  display: flex;
  width: 100%;
  background: $buttonLightBlue;
  border-radius: 5px;
}
.lightBlue {
  background: $buttonLightBlue;
}
.lightGreen {
  background: $buttonLightGreen;
}
.label {
  display: flex;
  margin: auto;
  color: transparent;
  line-height: 1;
  padding: 3px;
  text-shadow: 2px 2px 3px $textShadowColor, 0 0 rgb(0, 0, 0);
}
.blue {
  text-shadow: 2px 2px 3px $textShadowColor, 0 0 $buttonBlue;
}
.green {
  text-shadow: 2px 2px 3px $textShadowColor, 0 0 $buttonGreen;
}
.bold {
  font-size: xx-large;
}
</style>
