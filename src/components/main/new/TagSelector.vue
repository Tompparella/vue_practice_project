<script setup lang="ts">
import { Text, HoverOverlay, CornerButton } from "@/components/common";
import { getTagImagePath } from "../../../utils";
import type { Tag } from "@/types";
type Props = {
  tag?: Tag;
  weight?: number;
};
type Emits = {
  (e: "onTagPress"): void;
  (e: "onRemove"): void;
};
const props = defineProps<Props>();
defineEmits<Emits>();
const getWeight = () =>
  props.weight ? `${Math.round(100 * props.weight)}%` : "?";
</script>

<template>
  <div class="tag-container">
    <div class="image-container">
      <CornerButton v-if="Boolean(tag)" @onPress="$emit('onRemove')" />
      <img class="image" :src="tag && getTagImagePath(tag.imageUrl)" />
      <HoverOverlay @click="$emit('onTagPress')" />
    </div>
    <div class="info-container">
      <div class="weighing">
        <Text type="M" :label="getWeight()" />
      </div>
      <Text type="S" :label="tag?.name ?? ''" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
.tag-container {
  display: flex;
  justify-content: center;
  padding-inline: 0.5rem;
}
.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-left: 0.5rem;
}
.image-container {
  position: relative;
  height: $buttonSize;
  width: $buttonSize;
  border-radius: $borderSharp;
  @include hover-overlay;
}
.weighing {
  padding: 0.5rem;
  border-radius: $borderSharp;
  background-color: $displayBackground;
  box-shadow: $smallImageShadow;
}
.image {
  height: inherit;
  width: inherit;
  object-fit: cover;
  border-radius: inherit;
  @include hover-overlay;
}
</style>
