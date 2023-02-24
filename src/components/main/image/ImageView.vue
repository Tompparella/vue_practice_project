<script setup lang="ts">
import placeholderImage from "@/assets/images/test_meme.png";
import backgroundImage from "@/assets/images/fry.jpg";
</script>

<template>
  <div class="container">
    <div class="content">
      <img :src="placeholderImage" />
      <div class="shadow" />
      <div
        class="background"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/style/constants.scss";
.container {
  flex: 4;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.content {
  z-index: 0;
  position: relative;
  height: 100%;
  width: 100%;
  margin: auto;
  margin-inline: 1.5rem;
  border: 5px rgba(255, 255, 255, 0) solid;
  border-radius: $border;
  background-color: rgba(0, 0, 0, 0.76);
}
img {
  overflow: hidden;
  margin: auto;
  max-height: $imageHeight;
  object-fit: cover;
  object-position: top;
  border-radius: $border;
}
.shadow,
.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: inherit;
}
.shadow {
  z-index: 1;
  box-shadow: 0px 0px 16px 8px $shadowColor inset;
}
.background {
  z-index: -1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px) brightness(50%);
}
</style>
