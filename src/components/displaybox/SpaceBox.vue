<script setup lang="ts">
import { ref } from "vue";
import { SpaceMenu } from "../main";
import { HoverOverlay } from "../common";
type Props = {
  hidden: boolean;
};

defineProps<Props>();

const menuVisible = ref<boolean>(false);

const closeMenu = () => {
  menuVisible.value = false;
};

const openMenu = () => {
  menuVisible.value = true;
};

const onIconPress = () => {
  console.log("Space pressed");
};
</script>

<template>
  <div class="space-box">
    <i v-if="!hidden" class="icon las la-box" @click="onIconPress" />
    <div v-if="!hidden" class="space-container" @click="openMenu">
      <HoverOverlay class="hover" :label="'Select space'" />
    </div>
    <SpaceMenu :visible="menuVisible" @onClose="closeMenu" />
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
  @include hover-overlay;
}
.hover {
  transform: translateY(0);
}
</style>
