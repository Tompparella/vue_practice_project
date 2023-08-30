<script setup lang="ts">
import { Modal } from "../../../components/common";
import { MenuEntry } from "./components";

type Props = {
  visible: boolean;
};
type Emits = {
  (e: "onClose"): void;
};
defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <Modal :visible="visible" @onClose="$emit('onClose')">
    <div class="container">
      <div class="row">
        <MenuEntry label="Your home" :images="['lol']" />
        <MenuEntry label="Your profile" :images="['lol']" />
      </div>
      <MenuEntry label="Current Space" :images="['lol']" />
      <MenuEntry label="Filter by tags" :images="['lol', 'lel', 'lul']" />
    </div>
  </Modal>
</template>

<style scoped lang="scss">
.row,
.container {
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
.container {
  margin: auto;
  height: 80%;
  width: 80%;
  padding-block: 10%;
  align-self: center;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
