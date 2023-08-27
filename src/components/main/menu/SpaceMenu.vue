<script setup lang="ts">
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
    <div class="container"></div>
  </Modal>
</template>

<style scoped lang="scss">
.container {
  height: 200px;
  width: 200px;
}
</style>
