<script setup lang="ts">
import { ref } from "vue";
import { default as CreationModal } from "./CreationModal.vue";

const modalVisible = ref(false);
const onTogglePress = () => (modalVisible.value = !modalVisible.value);
</script>

<template>
  <div class="container">
    <div class="new-button" @click="onTogglePress">
      <i class="las la-plus-circle" />
    </div>
  </div>
  <CreationModal :visible="modalVisible" @onClose="onTogglePress" />
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
$iconSize: $buttonSize - 2rem;
.container {
  margin-left: 100%;
}
.new-button {
  display: flex;
  position: absolute;
  transform: translateX(-100%);
  border-width: 2px;
  border-style: solid;
  border-top-right-radius: $borderSoft - 0.2rem;
  border-bottom-left-radius: $borderSoft;
  border-color: transparent;
  border-bottom-color: white;
  border-left-color: white;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: $buttonSize;
  width: $buttonSize;
  background-color: $lightViolet;
  opacity: 0.5;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 6px 4px $pink inset;
  }
  &:active {
    box-shadow: 0 0 6px 10px $pink inset;
  }
}
.las {
  font-size: $iconSize;
  color: $pink;
}
</style>
