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
</style>
