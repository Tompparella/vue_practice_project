<script setup lang="ts">
import { Text, PickerModal } from "@/components/common";
import { default as TagSelector } from "./TagSelector.vue";
import type { Tag } from "@/types";
import { ref, computed } from "vue";
import { getTagImagePath } from "@/utils";
import { useCreationStore } from "@/stores";
type Props = {
  tags: Tag[] | null;
};
const props = defineProps<Props>();
const pickerVisible = ref(false);
const store = useCreationStore();
const selectedIndex = ref<number>();

const pickerData = computed(() =>
  props.tags
    ?.filter((tag) => !store.tags.includes(tag))
    .map(({ id, name: title, imageUrl }) => ({
      id,
      title,
      imageUrl: getTagImagePath(imageUrl),
    }))
);

const weight = computed(() => 1 / store.tags.length);

const toggleTagPicker = (index?: number) => {
  selectedIndex.value = index;
  pickerVisible.value = !pickerVisible.value;
};

const handleOnPick = (id: number) => {
  if (props.tags) {
    const tag = props.tags.find((tag) => tag.id === id);
    if (tag && !store.tags.includes(tag)) {
      if (selectedIndex.value !== undefined) {
        store.insertTag(tag, selectedIndex.value);
      } else {
        store.addTag(tag);
      }
    }
  }
  toggleTagPicker();
};

const unselectTag = (index: number) => {
  store.removeTag(index);
};
</script>

<template>
  <div class="tag-box">
    <Text type="M" label="Give your meme at least one tag" />
    <div class="tag-row">
      <TransitionGroup name="group">
        <li v-for="(tag, index) in store.tags" :key="tag.id">
          <TagSelector
            :tag="tag"
            :weight="weight"
            @onTagPress="() => toggleTagPicker(index)"
            @onRemove="() => unselectTag(index)"
          />
        </li>
      </TransitionGroup>
      <TagSelector v-if="store.tags.length < 3" @onTagPress="toggleTagPicker" />
    </div>
  </div>
  <PickerModal
    :data="pickerData"
    :visible="pickerVisible"
    @onPress="handleOnPick"
    @onClose="toggleTagPicker"
  />
</template>

<style scoped lang="scss">
.tag-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
}
.tag-row {
  flex: 1;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
}

group-move,
.group-enter-active,
.group-leave-active {
  transition: all 0.3s ease-in-out;
}

.group-enter-from,
.group-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.group-leave-active {
  position: absolute;
}
</style>
