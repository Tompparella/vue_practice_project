<script setup lang="ts">
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
  <Transition name="slide-fade">
    <div v-if="visible" class="modal">
      <div class="background" />
      <ul class="content">
        <li v-for="item in data" :key="item.id">
          <div class="item" @click="$emit('onPress', item)">
            <img :src="item.logo" :title="item.name" />
            <div class="item-overlay" />
          </div>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
.modal {
  z-index: 1;
  position: fixed;
  top: 10%;
  bottom: 10%;
  right: 0;
  left: 0;
  transition: 0.2s;
  max-width: 45rem;
  margin: auto;
}
.background {
  width: 100%;
  height: 100%;
  background: $lightGreen;
  border-radius: $borderSoft;
  opacity: 0.9;
  box-shadow: 0px 0px 15px 2px $shadowColor;
}
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
