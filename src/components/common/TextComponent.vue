<script setup lang="ts">
type Props = {
  label: string;
  type: "XS" | "S" | "M" | "L";
};
defineProps<Props>();
</script>
<template>
  <p :class="type">{{ label }}</p>
</template>
<style scoped lang="scss">
@import "../../style/constants.scss";
p {
  color: $textColor;
  margin: 0;
}
.XS {
  font-size: 12px;
}
.S {
  font-size: 16px;
}
.M {
  font-size: 24px;
}
.L {
  font-size: 28px;
}
</style>
