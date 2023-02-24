<script setup lang="ts">
type Props = {
  rating: number;
};
defineProps<Props>();
</script>
<template>
  <div class="bar-container">
    <div class="base-bar"></div>
    <div
      class="fill-bar"
      :class="{ perfect: rating > 96 }"
      :style="{ '--progress': rating === 0 ? 1 : rating }"
    />
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
  height: 55%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  border-radius: $border;
  width: calc(var(--progress) * 0.95%);
  background-color: hsl(var(--progress), 100%, 50%);
  transition: 1s ease-in-out;
}
.fill-bar.perfect {
  background-color: $lightViolet;
}
</style>
