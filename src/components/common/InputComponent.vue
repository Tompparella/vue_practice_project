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
  min-width: 350px;
  width: 22vw;
  height: 60px;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 2px 4px 1px $shadowColor inset;
  font-size: x-large;
  text-align: center;
}
</style>
