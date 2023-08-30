<script setup lang="ts">
import { ImageHover, Label } from "../../../../components/common";
type Props = {
  label: string;
  options: string[];
};
type Emits = {
  (e: "onPress"): void;
};
defineEmits<Emits>();
defineProps<Props>();
</script>

<template>
  <div class="entry">
    <Label type="M" :label="label" />
    <div class="images">
      <ImageHover
        v-for="option in options"
        :key="option"
        :image="option"
        @click="$emit('onPress')"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.entry {
  flex-direction: column;
}
.images,
.entry {
  flex: 1;
  width: 100%;
  display: flex;
}
</style>
