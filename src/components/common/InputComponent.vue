<script setup lang="ts">
defineProps({
  initialValue: String,
  secret: Boolean,
});
interface Emits {
  onChange: (value: string) => void;
}
defineEmits<Emits>();
</script>
<template>
  <input
    v-if="secret"
    :value="initialValue"
    type="password"
    class="input"
    @input="$emit('onChange, event.currentTarget.value')"
  />
  <input
    v-else
    :value="initialValue"
    type="text"
    class="input"
    @input="$emit('onChange, event.currentTarget.value')"
  />
</template>
<style scoped lang="scss"></style>
