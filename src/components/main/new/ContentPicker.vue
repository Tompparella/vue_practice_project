<script setup lang="ts">
import { computed, ref, type Ref } from "vue";
import { Text, Input, HoverOverlay } from "@/components/common";
// TODO: Replace with a better default image
import logo from "../../../assets/images/logo_white.png";
const acceptedMimeTypes = [
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
];
const name: Ref<string> = ref("");
// HOX! Name saattaa olla eripitkä. Tarkista
const file: Ref<File | undefined> = ref();
const fileMimeType = computed(() => file.value?.type);
const previewUrl = computed(
  () => file.value && URL.createObjectURL(file.value)
);

const onUpload = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const newFile = target.files ? target.files[0] : undefined;
  if (newFile && acceptedMimeTypes.includes(newFile.type)) {
    file.value = newFile;
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
    <Text type="M" label="Give your meme a title!" />
    <Input v-model="name" :limit="64" />
  </div>
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
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
.file-upload {
  position: absolute;
  width: inherit;
  height: inherit;
  transform: translateY(-100%);
  opacity: 0;
  z-index: 999;
}
</style>
