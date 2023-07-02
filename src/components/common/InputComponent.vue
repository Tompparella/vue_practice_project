<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  secret: { type: Boolean, required: false },
  limit: { type: Number, required: false },
});
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
const handleChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (props.limit && value.length > props.limit) {
    return event.preventDefault();
  }
  emit("update:modelValue", value);
};
</script>
<template>
  <input
    :value="modelValue"
    :type="secret ? 'password' : 'text'"
    @input="handleChange"
    :maxlength="props.limit"
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
