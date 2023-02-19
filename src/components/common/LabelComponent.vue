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
  color: transparent;
  line-height: 1;
  margin: 0;
  text-shadow: 1px 1px 3px $textShadowColor, 0 0 $textColor;
}
h1 {
  font-size: 60px;
}
h2 {
  font-size: 44px;
}
h3 {
  font-size: 32px;
}
</style>
