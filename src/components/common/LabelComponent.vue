<script setup lang="ts">
type Props = {
  label: string;
  type: "S" | "M" | "L";
};
defineProps<Props>();
</script>
<template>
  <h3 v-if="type === 'S'">{{ label }}</h3>
  <h2 v-else-if="type === 'M'">{{ label }}</h2>
  <h1 v-else>{{ label }}</h1>
</template>
<style scoped lang="scss">
@import "../../style/constants.scss";
h1,
h2,
h3 {
  color: $textColor;
  font-size: xx-large;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 10px;
}
</style>
