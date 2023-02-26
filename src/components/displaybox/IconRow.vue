<script setup lang="ts">
const onTagPress = () => {
  console.log("Tag"); // Toggle tag visibility
};
const onInfoPress = () => {
  console.log("Info"); // Toggle info modal
};
const onSpacePress = () => {
  console.log("Space"); // Toggle space modal
};
</script>

<template>
  <div class="icon-container">
    <i class="icon las la-tags" @click="onTagPress" />
    <i class="icon las la-info-circle" @click="onInfoPress" />
    <i class="icon las la-box" @click="onSpacePress" />
  </div>
</template>
<style scoped lang="scss">
@import "../../style/constants.scss";
.icon-container {
  flex: 1;
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding-block: 0.5vh;
  margin-inline: 3vh;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $shadowColor;
  height: 5vh;
  width: 5vh;
  font-size: 4.5vh;
  border-radius: $borderSharp;
  border: 3px solid rgb(0, 0, 0, 0.5);
  box-shadow: 0 1px 4px 0 $shadowColor;
  &:hover {
    color: black;
    transform: scale(1.1);
    transition: 0.2s all ease;
  }
  &:active {
    transform: scale(1.3);
  }
}
</style>
