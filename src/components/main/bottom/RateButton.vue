<script setup lang="ts">
type Props = {
  color: "red" | "green";
};
type Emits = {
  (e: "onPress"): void;
};
defineProps<Props>();
defineEmits<Emits>();
</script>
<template>
  <div @click="$emit('onPress')" :class="color" class="rate-button">
    <div class="inner">
      <i :class="color === 'red' ? 'las la-angry' : 'las la-laugh-squint'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
$buttonSize: 12vh;
$iconSize: $buttonSize - 3vh;
$animationTime: 0.1s;
i {
  margin: auto;
  font-size: $iconSize;
  border-radius: $borderSoft;
}
i.la-angry {
  color: $deepRed;
}
i.la-laugh-squint {
  color: $deepGreen;
}
.rate-button {
  display: flex;
  height: $buttonSize;
  border-radius: $border;
  box-shadow: 0 4px 4px 0 $shadowColor;
  transition: $animationTime ease all;
  -moz-transition: $animationTime ease all;
}
.inner {
  margin: 1vh;
  border-radius: $borderSoft;
}
.red.rate-button {
  background-color: $red;
  border: 5px solid $redHover;
}
.red.rate-button .inner {
  background-color: $lightRed;
}
.green.rate-button {
  background-color: $green;
  border: 5px solid $redHover;
}
.green.rate-button .inner {
  background-color: $lightGreen;
}
</style>
