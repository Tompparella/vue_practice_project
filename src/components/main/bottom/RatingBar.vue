<script setup lang="ts">
type Props = {
  rating: number;
};
defineProps<Props>();
</script>
<template>
  <div class="bar-container">
    <div class="base-bar"></div>
    <div class="fill-bar" />
  </div>
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
.bar-container {
  position: relative;
  display: flex;
  height: 55%;
  width: 60%;
}
.base-bar {
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: $borderSoft;
  border: 5px solid $borderColor;
  box-shadow: 0 4px 8px 0 $borderColor;
  z-index: 0;
}
.fill-bar {
  position: absolute;
  border-radius: $borderSoft;
  top: 8px;
  bottom: 8px;
  left: 8px;
  right: 8px;
  //background-color: mix(rgb(128, 0, 0), rgb(0, 255, 0), var(width)) `; // Tähä jäätiin
}
</style>
