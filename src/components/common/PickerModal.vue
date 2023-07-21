<script setup lang="ts">
import { Text } from "../common";
import { default as Modal } from "./ModalView.vue";
type Data = {
  id: number;
  imageUrl: string;
  title: string;
};
type Props = {
  data?: Data[];
  visible: boolean;
};
type Emits = {
  (e: "onPress", id: number): void;
  (e: "onClose"): void;
};
defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <Modal :visible="visible" @onClose="$emit('onClose')">
    <ul class="content">
      <li v-for="{ imageUrl, title, id } in data" :key="id">
        <div class="item" @click="$emit('onPress', id)">
          <img :src="imageUrl" :title="title" />
          <div class="item-overlay" />
          <Text class="label" :label="title" type="S" />
        </div>
      </li>
    </ul>
  </Modal>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.content {
  display: flex;
  flex: 1;
  flex-wrap: "wrap";
  height: 100%;
}
.label {
  text-align: center;
  padding-block: 0.5rem;
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
