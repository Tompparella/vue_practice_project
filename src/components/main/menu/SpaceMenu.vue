<script setup lang="ts">
import { UserOption, SpaceOption, FilterOption } from "./components";
import { Modal } from "../../../components/common";
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
      <UserOption />
      <SpaceOption />
      <FilterOption />
    </div>
  </Modal>
</template>

<style scoped lang="scss">
.container {
  flex: 1;
  display: flex;
  width: 100%;
  padding: 5% 10% 10% 10%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
