<script setup lang="ts">
type Props = {
  hidden: boolean;
};

defineProps<Props>();

const onIconPress = () => {
  console.log("Space pressed");
};
</script>

<template>
  <div class="space-box">
    <i v-if="!hidden" class="icon las la-box" @click="onIconPress" />
    <div v-if="!hidden" class="space-container"></div>
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
  width: $headerHeight;
}
.space-container {
  height: $headerHeight;
  width: $headerHeight;
  border-radius: $border;
  background: white;
  box-shadow: 1px 2px 4px 1px $shadowColor inset;
}
</style>
