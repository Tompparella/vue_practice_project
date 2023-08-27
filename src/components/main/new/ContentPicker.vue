<script setup lang="ts">
import { computed } from "vue";
import { Label, Input, HoverOverlay } from "@/components/common";
// TODO: Replace with a better default image
import logo from "../../../assets/images/logo_white.png";
import { useCreationStore } from "@/stores";
import { storeToRefs } from "pinia";
const acceptedMimeTypes = [
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
];
const store = useCreationStore();
const { title } = storeToRefs(store);
// HOX! Name saattaa olla eripitkä. Tarkista
const previewUrl = computed(
  () => store.image && URL.createObjectURL(store.image)
);

const onUpload = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const newFile = target.files ? target.files[0] : undefined;
  if (newFile && acceptedMimeTypes.includes(newFile.type)) {
    store.setImage(newFile);
  } else {
    alert("Wrong file format!");
  }
};
</script>

<template>
  <div class="content-picker">
    <div class="image-container">
      <img class="image" :src="previewUrl ?? logo" />
      <input class="file-upload" type="file" @change="onUpload" />
      <HoverOverlay />
    </div>
    <Label type="M" :label="$t('creationModal.title')" class="label" />
    <Input v-model="title" :limit="64" />
  </div>
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
@import "../../../style/mixins.scss";
.content-picker {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image-container {
  height: 10rem;
  width: 10rem;
  border-radius: $borderSharp;
  @include hover-overlay;
}
.image {
  object-fit: cover;
  height: inherit;
  width: inherit;
  box-shadow: $smallImageShadow;
  border-radius: inherit;
}
.label {
  margin-block: 0.5rem;
}
.file-upload {
  position: absolute;
  width: inherit;
  height: inherit;
  transform: translateY(-100%);
  opacity: 0;
  z-index: 1;
}
</style>
