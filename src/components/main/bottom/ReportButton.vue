<script setup lang="ts">
type Emits = {
  (e: "onPress"): void;
};
defineEmits<Emits>();
</script>

<template>
  <div class="report" @click="$emit('onPress')">
    <i class="la la-exclamation-triangle fa-lg" />
  </div>
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
i {
  font-size: 2rem;
  margin-inline: auto;
}
.report {
  display: flex;
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 5rem;
  opacity: 0.4;
  height: 2.5rem;
  border: 4px $deepRed solid;
  border-radius: $borderSoft $borderSoft 0 0;
  background-color: $reportButtonBackground;
  transition: 0.2s ease;
  transform: translateX(-50%);
  &:hover {
    box-shadow: 0 0 6px 4px $red inset;
  }
  &:active {
    box-shadow: 0 0 6px 10px $lightRed inset;
  }
}
</style>
