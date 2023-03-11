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
<style scoped lang="scss">
@import "../../style/constants.scss";
input {
  width: 60%;
  height: 3rem;
  border-radius: $borderSharp;
  border: none;
  box-shadow: 1px 2px 4px 1px $shadowColor inset;
  text-align: center;
}
</style>
