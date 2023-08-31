<script setup lang="ts">
import { Label, PickerModal } from "@/components/common";
import { default as TagSelector } from "./TagSelector.vue";
import type { Tag } from "@/types";
import { ref, computed } from "vue";
export type TagInserted = { tag: Tag; index: number };
export type TagAdded = { tag: Tag };
export type TagRemoved = { index: number };
type Props = {
  title: string;
  availableTags: Tag[];
  selectedTags: Tag[];
  disableWeight?: boolean;
};
type Emits = {
  (e: "onTagInserted", data: TagInserted): void;
  (e: "onTagAdded", data: TagAdded): void;
  (e: "onTagRemoved", data: TagRemoved): void;
};
const emit = defineEmits<Emits>();
const props = defineProps<Props>();
const pickerVisible = ref(false);
const selectedIndex = ref<number>();

const pickerData = computed(() =>
  props.availableTags?.filter((tag) => !props.selectedTags.includes(tag))
);
const weight = computed(() =>
  props.disableWeight ? null : 1 / props.selectedTags.length
); // TODO: Let user define weight themselves

const toggleTagPicker = (index?: number) => {
  selectedIndex.value = index;
  pickerVisible.value = !pickerVisible.value;
};

const handleOnPick = (id: number) => {
  if (props.selectedTags) {
    const tag = props.availableTags.find((tag) => tag.id === id);
    if (tag && !props.selectedTags.includes(tag)) {
      if (selectedIndex.value !== undefined) {
        emit("onTagInserted", { tag, index: selectedIndex.value });
      } else {
        emit("onTagAdded", { tag });
      }
    }
  }
  toggleTagPicker();
};

const unselectTag = (index: number) => {
  emit("onTagRemoved", { index });
};
</script>

<template>
  <div class="tag-box">
    <Label type="M" :label="title" />
    <div class="tag-row">
      <TransitionGroup name="group">
        <li v-for="(tag, index) in selectedTags" :key="tag.id">
          <TagSelector
            :tag="tag"
            :weight="weight"
            @onTagPress="() => toggleTagPicker(index)"
            @onRemove="() => unselectTag(index)"
          />
        </li>
      </TransitionGroup>
      <TagSelector
        v-if="selectedTags.length < 3"
        @onTagPress="toggleTagPicker"
        :weight="null"
      />
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
