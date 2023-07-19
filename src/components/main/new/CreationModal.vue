<script setup lang="ts">
import { Modal, Button } from "@/components/common";
import { default as InstitutionBox } from "./InstitutionBox.vue";
import { default as ContentPicker } from "./ContentPicker.vue";
import { default as TagBox } from "./TagBox.vue";
import { useUserStore } from "../../../stores";
import { useGetGuildQuery } from "../../../hooks/queries";
import { toRef } from "vue";
import { computed } from "vue";
type Props = {
  visible: boolean;
};
const props = defineProps<Props>();
const userStore = useUserStore();
const visible = toRef(props, "visible");
const guildId = computed(() => userStore.userData?.guildId);
const { data: guildData } = useGetGuildQuery(visible, guildId);
//const { tagData } = useGetTagData();

const onPress = () => {
  console.log("create");
};
</script>

<template>
  <Modal :visible="visible">
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
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
