<script setup lang="ts">
import type { GuildData, UniversityData } from "@/types";
import { ref } from "vue";
import { Text, PickerModal } from ".";
type Props = {
  institutionData: GuildData[] | UniversityData[];
  currentInstitution: GuildData | UniversityData | null;
};
type Emits = {
  (e: "onPick", data: GuildData | UniversityData | null): void;
};
defineProps<Props>();
const emit = defineEmits<Emits>();
const modalVisible = ref(false);
const onPress = () => (modalVisible.value = !modalVisible.value);
const handleOnPick = (data: GuildData | UniversityData) => {
  emit("onPick", data);
};
</script>

<template>
  <div class="logo-container" @click="onPress">
    <img :src="currentInstitution?.logo" />
    <div class="hover-overlay">
      <Text class="overlay-text" :label="$t('common.choose')" type="S" />
    </div>
    <PickerModal
      :data="institutionData"
      :visible="modalVisible"
      @onPress="handleOnPick"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.logo-container {
  height: 125px;
  width: 125px;
  background: white;
  border-radius: 5px;
  &:hover .hover-overlay {
    opacity: 0.8;
  }
  &:active .hover-overlay {
    background: $deepCyan;
  }
}
.hover-overlay {
  position: absolute;
  border-radius: inherit;
  width: inherit;
  height: inherit;
  background: $cyan;
  transition: 0.2s ease;
  transform: translate(0, -103%);
  opacity: 0;
}
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  user-select: none;
}
img {
  margin: auto;
  height: inherit;
  width: inherit;
  object-fit: cover;
  border-radius: inherit;
  box-shadow: 1px 2px 4px 1px $shadowColor inset;
}
</style>
