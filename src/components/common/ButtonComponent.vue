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
  margin-top: 20px;
  border-radius: 5px;
  transition: 0.1s;
  &:hover {
    background: $buttonOuterHover;
  }
  &:hover div {
    background: $buttonHover;
  }
  &:hover h1 {
    color: $textHover;
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
  text-shadow: 0px 0px 2px $textColor, 0 0 rgb(0, 0, 0);
}
.blue {
  text-shadow: 0px 0px 1px $buttonBlue, 0 0 #000;
}
.green {
  text-shadow: 0px 0px 1px $buttonGreen, 0 0 rgb(0, 0, 0);
}
.bold {
  font-size: xx-large;
}
</style>
