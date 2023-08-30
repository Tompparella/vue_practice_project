<script setup lang="ts">
import { ref } from "vue";
import { SpaceMenu } from "../main";
import { ImageHover } from "../common";
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
    <ImageHover v-if="!hidden" @click="openMenu" :label="'Select space'" />
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
</style>
