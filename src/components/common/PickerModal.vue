<script setup lang="ts">
import { getInstitutionImagePath } from "../../utils";
import { default as Modal } from "./ModalView.vue";
import type { GuildData, UniversityData } from "@/types";
type Props = {
  data?: GuildData[] | UniversityData[];
  visible: boolean;
};
type Emits = {
  (e: "onPress", data: GuildData | UniversityData): void;
};
defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <Modal :visible="visible">
    <ul class="content">
      <li v-for="item in data" :key="item.id">
        <div class="item" @click="$emit('onPress', item)">
          <img
            :src="getInstitutionImagePath(item.imageUrl)"
            :title="item.name"
          />
          <div class="item-overlay" />
        </div>
      </li>
    </ul>
  </Modal>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.content {
  display: flex;
  position: absolute;
  flex-wrap: "wrap";
  top: 10px;
  left: 25px;
  right: 25px;
  bottom: 10px;
}
.item {
  position: relative;
  margin: 5px;
  width: 5rem;
  height: 5rem;
  &:hover .item-overlay {
    opacity: 0.6;
  }
  &:active .item-overlay {
    opacity: 0.9;
  }
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
li {
  list-style: none;
  flex-wrap: wrap;
}
img {
  height: inherit;
  width: inherit;
  border-radius: $border;
  object-fit: cover;
  background: white;
  box-shadow: 1px 1px 10px 2px $shadowColor;
}
.item-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: $border;
  transition: 0.2s;
  opacity: 0;
  background: $cyan;
}
</style>
