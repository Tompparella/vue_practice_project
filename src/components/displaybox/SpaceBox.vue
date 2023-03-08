<script setup lang="ts">
const onIconPress = () => {
  console.log("Space pressed");
};
</script>

<template>
  <div class="space-box">
    <i class="icon las la-box" @click="onIconPress" />
    <div class="space-container"></div>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
@import "../../style/mixins.scss";
.icon {
  @include display-icon;
}
.space-box {
  display: flex;
  flex-direction: column;
}
.space-container {
  height: $headerHeight;
  width: $headerHeight;
  border-radius: $border;
  background: white;
  box-shadow: 1px 2px 4px 1px $shadowColor inset;
}
</style>
