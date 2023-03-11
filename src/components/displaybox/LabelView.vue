<script setup lang="ts">
import { ref } from "vue";
import { default as LabelEntry } from "./LabelEntry.vue";

type Props = {
  hidden: boolean;
};

defineProps<Props>();

const iconsVisible = ref(true);
const onIconPress = () => (iconsVisible.value = !iconsVisible.value);
</script>

<template>
  <div class="label-view">
    <i v-if="!hidden" class="icon las la-tags" @click="onIconPress" />
    <ul
      v-if="!hidden"
      class="label-container"
      :class="!iconsVisible && 'slideOut'"
    >
      <LabelEntry />
      <LabelEntry />
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
@import "../../style/mixins.scss";
.label-view {
  width: $headerHeight;
  height: 100%;
}
.label-container {
  display: flex;
  flex-direction: column;
  transition: 0.5s all ease-in-out;
}
.icon {
  @include display-icon;
}
.slideOut {
  transform: translateX(-2rem);
  opacity: 0;
}
</style>
