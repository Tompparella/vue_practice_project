<script setup lang="ts">
import Lol from "../../../assets/images/logo_ebin.png";
import { Text } from "@/components/common";
type Props = {
  visible: boolean;
};
defineProps<Props>();
</script>

<template>
  <div v-if="visible" class="container">
    <Text label="Creating a meme for" type="M" />
    <div class="row-container">
      <div class="text-container">
        <Text label="Foo" type="M" />
      </div>
      <img class="image" :src="Lol" />
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
}
</style>
