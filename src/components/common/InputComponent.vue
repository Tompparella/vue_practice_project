<script setup lang="ts">
defineProps({
  modelValue: String,
  secret: { type: Boolean, required: false },
});
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
const handleChange = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>
<template>
  <input
    :value="modelValue"
    :type="secret ? 'password' : 'text'"
    @input="handleChange"
  />
</template>
<style scoped lang="scss"></style>
