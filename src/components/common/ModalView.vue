<script setup lang="ts">
type Props = {
  visible: boolean;
};
type Emits = {
  (e: "onClose", value: Event): void;
};
defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="visible" class="modal">
      <div class="background" />
      <div class="modal-content">
        <i
          class="las la-times-circle close-button"
          @click="(e) => $emit('onClose', e)"
        />
        <slot />
      </div>
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
  user-select: none;
}
.modal-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.background {
  width: 100%;
  height: 100%;
  background: $lightGreen;
  border-radius: $borderSoft;
  opacity: 0.9;
  box-shadow: 0px 0px 15px 2px $shadowColor;
}
.close-button {
  transition: 0.3s all;
  position: absolute;
  right: 0;
  margin: 1rem;
  font-size: 2rem;
  &:hover {
    color: $borderColor;
  }
}
</style>
