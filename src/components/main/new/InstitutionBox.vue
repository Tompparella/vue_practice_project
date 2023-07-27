<script setup lang="ts">
import { Label, Text } from "@/components/common";
import { getInstitutionImagePath } from "@/utils";
type Props = {
  title: string;
  institution?: string;
  imageUrl?: string;
};
defineProps<Props>();
</script>

<template>
  <div class="container">
    <Label :label="title" type="M" />
    <div class="row-container">
      <div class="text-container">
        <Text :label="institution ?? '...'" type="M" />
      </div>
      <img class="image" :src="getInstitutionImagePath(imageUrl)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.row-container {
  display: flex;
  flex-direction: row;
  padding-top: 0.5rem;
}
.text-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  height: $buttonSize;
  width: $buttonSize;
  object-fit: cover;
  border-radius: $borderSharp;
  box-shadow: $smallImageShadow;
}
</style>
