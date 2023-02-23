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
      <i :class="color === 'red' ? 'las la-angry' : 'las la-laugh-squint'"></i>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
$buttonSize: 12vh;
$iconSize: $buttonSize - 3vh;
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
  width: $buttonSize;
  height: $buttonSize;
  border-radius: $border;
  box-shadow: 0 4px 8px 0 $shadowColor;
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
