<script setup lang="ts">
import { Modal, Button } from "@/components/common";
import { default as InstitutionBox } from "./InstitutionBox.vue";
import { default as ContentPicker } from "./ContentPicker.vue";
import {
  default as TagBox,
  type TagAdded,
  type TagInserted,
  type TagRemoved,
} from "./TagBox.vue";
import { useCreationStore, useUserStore } from "../../../stores";
import {
  useGetGuildQuery,
  useGetTagsQuery,
  usePostContentMutation,
} from "../../../hooks/queries";
import { toRef, computed } from "vue";
import { storeToRefs } from "pinia";
type Props = {
  visible: boolean;
};
type Emits = {
  (e: "onClose"): void;
};
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
const userStore = useUserStore();
const creationStore = useCreationStore();
const creation = storeToRefs(useCreationStore());
const visible = toRef(props, "visible");
const guildId = computed(() => userStore.userData?.guildId);
const { data: guildData } = useGetGuildQuery(visible, guildId);
const { data: tagData } = useGetTagsQuery(visible);
const { mutate } = usePostContentMutation();

const closeModal = () => {
  creationStore.clearContent();
  emit("onClose");
};

const onCreate = () => {
  const { title, tags, image } = creationStore;
  if (title.length > 0 && tags.length > 0 && image) {
    mutate({
      title,
      tags,
      image,
      callback: closeModal,
    });
  } else {
    alert(
      "Failed to post content. Please check that the content values are set correctly!"
    );
  }
};
const insertTag = ({ tag, index }: TagInserted) => {
  creationStore.insertTag(tag, index);
};
const addTag = ({ tag }: TagAdded) => {
  creationStore.addTag(tag);
};
const removeTag = ({ index }: TagRemoved) => {
  creationStore.removeTag(index);
};
</script>

<template>
  <Modal :visible="visible" @onClose="closeModal">
    <div class="frame">
      <div class="institution-row">
        <InstitutionBox
          :title="$t('creationModal.guild')"
          :institution="guildData?.name"
          :imageUrl="guildData?.imageUrl"
        />
        <InstitutionBox
          :title="$t('creationModal.university')"
          :institution="guildData?.university.name"
          :imageUrl="guildData?.university.imageUrl"
        />
      </div>
      <ContentPicker />
      <TagBox
        :title="$t('creationModal.tag')"
        @onTagAdded="addTag"
        @onTagInserted="insertTag"
        @onTagRemoved="removeTag"
        :selectedTags="creation.tags.value"
        :availableTags="tagData ?? []"
      />
      <div class="button-container">
        <Button :label="$t('creationModal.create')" @onPress="onCreate" />
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
