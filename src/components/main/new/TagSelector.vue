<script setup lang="ts">
import { Text, HoverOverlay } from "@/components/common";
import Thing from "../../../assets/images/test_meme.png";
</script>

<template>
  <div class="tag-container">
    <div class="image-container">
      <img class="image" :src="Thing" />
      <HoverOverlay />
    </div>
    <div class="info-container">
      <div class="weighing">
        <Text type="M" label="33%" />
      </div>
      <Text type="S" label="Boomer" />
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
