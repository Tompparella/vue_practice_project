<script setup lang="ts">
import { Text } from "../common";
import type { Tag } from "@/types";
import { getTagImagePath } from "@/utils";
import { ref } from "vue";

type Props = {
  tag: Tag;
};
defineProps<Props>();
const focused = ref<boolean>(false);
const focusedOn = () => {
  focused.value = true;
};
const focusedOff = () => {
  focused.value = false;
};
</script>

<template>
  <li
    class="label-entry"
    @mouseenter="() => focusedOn()"
    @mouseleave="() => focusedOff()"
  >
    <div class="card">
      <img :src="getTagImagePath(tag.imageUrl)" />
      <div class="text-box">
        <Text class="text" :label="tag.name" :type="'S'" />
        <Text
          v-if="focused"
          class="text"
          :label="tag.description"
          :type="'XS'"
        />
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
img {
  margin-block: auto;
  margin-inline: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;
}
.label-entry {
  user-select: none;
  position: relative;
  height: 2.5rem;
  transform: translateX(-35%) rotate(4deg);
  transition: 0.2s all ease;
  z-index: 1;
  &:hover,
  &:active {
    transform: scale(1.2);
    z-index: 2;
  }
}
.card {
  top: 0;
  position: absolute;
  background: white;
  border: 2px solid $borderColor;
  border-radius: $border;
  display: flex;
  min-height: 3rem;
  width: 10rem;
}
.text-box {
  display: flex;
  flex-direction: column;
}
.text {
  margin-block: auto;
  word-break: break-all;
}
</style>
