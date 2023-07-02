<script setup lang="ts">
import { Modal, Button } from "@/components/common";
import { default as InstitutionBox } from "./InstitutionBox.vue";
import { default as ContentPicker } from "./ContentPicker.vue";
import { default as TagBox } from "./TagBox.vue";
type Props = {
  visible: boolean;
};
defineProps<Props>();
const onPress = () => {
  console.log("create");
};
</script>

<template>
  <Modal :visible="visible">
    <div class="frame">
      <div class="institution-row">
        <InstitutionBox :visible="true" />
        <InstitutionBox :visible="true" />
      </div>
      <ContentPicker />
      <TagBox />
      <div class="button-container">
        <Button label="Create!" @onPress="onPress" />
      </div>
    </div>
  </Modal>
</template>

<style scoped lang="scss">
.frame {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  justify-content: center;
}
.institution-row {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
}
.button-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
