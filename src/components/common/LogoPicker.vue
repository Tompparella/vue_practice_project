<script setup lang="ts">
import type { InstitutionData } from "@/types";
import { ref } from "vue";
import { default as PickerModal } from "./PickerModal.vue";
import { default as HoverOverlay } from "./HoverOverlay.vue";

type Props = {
  institutionData?: InstitutionData[];
  currentInstitution: InstitutionData | null;
};
type Emits = {
  (e: "onPick", data: InstitutionData | null): void;
};
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
const modalVisible = ref(false);
const onPress = () => (modalVisible.value = !modalVisible.value);
const handleOnPick = (id: number) => {
  const selected: InstitutionData | null = props.institutionData
    ? props.institutionData.find((item) => item.id === id) ?? null
    : null;
  onPress();
  emit("onPick", selected);
};
</script>

<template>
  <div class="logo-container" @click="onPress">
    <img :src="currentInstitution?.imageUrl" :placeholder="'Institution'" />
    <HoverOverlay />
    <PickerModal
      :data="institutionData"
      :visible="modalVisible"
      @onPress="handleOnPick"
      @onClose="onPress"
    />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
@import "../../style/mixins.scss";
.logo-container {
  height: 7rem;
  width: 7rem;
  background: white;
  border-radius: $borderSharp;
  @include hover-overlay;
}
img {
  margin: auto;
  height: inherit;
  width: inherit;
  object-fit: cover;
  border-radius: inherit;
  box-shadow: $smallImageShadow;
}
</style>
