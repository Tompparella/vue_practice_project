<script setup lang="ts">
import { Modal, Button } from "@/components/common";
import { default as InstitutionBox } from "./InstitutionBox.vue";
import { default as ContentPicker } from "./ContentPicker.vue";
import { default as TagBox } from "./TagBox.vue";
import { useCreationStore, useUserStore } from "../../../stores";
import { useGetGuildQuery, useGetTagsQuery } from "../../../hooks/queries";
import { toRef, computed } from "vue";
type Props = {
  visible: boolean;
};
type Emits = {
  (e: "onClose"): void;
};
const props = defineProps<Props>();
defineEmits<Emits>();
const userStore = useUserStore();
const creationStore = useCreationStore();
const visible = toRef(props, "visible");
const guildId = computed(() => userStore.userData?.guildId);
const { data: guildData } = useGetGuildQuery(visible, guildId);
const { data: tagData } = useGetTagsQuery(visible);

const onCreate = () => {
  console.log(creationStore.title);
  console.log(creationStore.tags);
  console.log(creationStore.image);
};
</script>

<template>
  <Modal :visible="visible" @onClose="$emit('onClose')">
    <div class="frame">
      <div class="institution-row">
        <InstitutionBox
          :title="'Creating a meme for'"
          :institution="guildData?.name"
          :imageUrl="guildData?.imageUrl"
        />
        <InstitutionBox
          :title="'Which is a subsidiary of'"
          :institution="guildData?.university.name"
          :imageUrl="guildData?.university.imageUrl"
        />
      </div>
      <ContentPicker />
      <TagBox :tags="tagData ?? null" />
      <div class="button-container">
        <Button label="Create!" @onPress="onCreate" />
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
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
