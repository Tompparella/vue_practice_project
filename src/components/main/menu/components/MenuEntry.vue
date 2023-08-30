<script setup lang="ts">
import { ImageHover, Label } from "../../../../components/common";

type Props = {
  label: string;
  images: string[];
};
defineProps<Props>();
</script>

<template>
  <div class="entry">
    <Label type="M" :label="label" />
    <div class="images">
      <ImageHover v-for="{ image } in images" :key="image" :image="image" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.entry {
  flex: 1;
  display: flex;
  width: 70%;
  height: 100%;
  align-items: center;
  flex-direction: column;
}

.images,
.entry {
  flex: 1;
  display: flex;
}
.images {
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
