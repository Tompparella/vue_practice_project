<script setup lang="ts">
const props = defineProps({});
interface Emits {
  onPress: () => void;
}
defineEmits<Emits>();
</script>
<template>
  <button class="button" @click="$emit('onPress')">
    {{ $t("authentication.register") }}
  </button>
</template>

<style scoped lang="scss">
.button {
  width: 150px;
  height: 50px;
  margin-top: 35px;
}
</style>
