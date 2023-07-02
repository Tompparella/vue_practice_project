<script setup lang="ts">
import { ref, type Ref } from "vue";
import Logo from "../../../assets/images/logo_test.png";
import { Text, Input, HoverOverlay } from "@/components/common";
const name: Ref<string> = ref("");
// HOX! Name saattaa olla eripitkä. Tarkista
</script>

<template>
  <div class="content-picker">
    <div class="image-container">
      <img class="image" :src="Logo" />
      <HoverOverlay />
    </div>
    <Text type="M" label="Give your meme a name!" />
    <Input v-model="name" :limit="64" />
  </div>
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
.content-picker {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image-container {
  height: 10rem;
  width: 10rem;
  border-radius: $borderSharp;
  @include hover-overlay;
}
.image {
  height: inherit;
  box-shadow: $smallImageShadow;
  border-radius: inherit;
}
</style>
