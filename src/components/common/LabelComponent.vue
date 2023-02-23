<script setup lang="ts">
type Props = {
  label: string;
  type: "S" | "M" | "L";
  color?: "violet" | "green" | "cyan" | "lightBlue" | "lightGreen" | "blue";
  backdrop?: boolean;
  inset?: boolean;
};
defineProps<Props>();
</script>
<template>
  <div :class="[{ backdrop: backdrop, inset: inset }, color]">
    <h3 v-if="type === 'S'">{{ label }}</h3>
    <h2 v-else-if="type === 'M'">{{ label }}</h2>
    <h1 v-else>{{ label }}</h1>
  </div>
</template>
<style scoped lang="scss">
@import "../../style/constants.scss";
div {
  user-select: none;
  text-shadow: 2px 2px 2px $textShadowColor, 0 0 $textColor;
}
h1,
h2,
h3 {
  color: transparent;
  line-height: 1;
  margin: 0;
  text-align: center;
}
.backdrop {
  background: white;
  border-radius: $border;
  padding-inline: 20px;
  padding-block: 5px;
  box-shadow: 1px 2px 2px 0px $shadowColor;
}
.inset {
  box-shadow: 1px 2px 2px 0px $shadowColor inset;
}
.violet {
  text-shadow: 2px 2px 2px $textShadowColor, 0 0 $violet;
}
.violet.backdrop {
  background: $lightViolet;
}
.green {
  text-shadow: 2px 2px 2px $textShadowColor, 0 0 $deepGreen;
}
.green.backdrop {
  background: $lightGreen;
}
.cyan {
  text-shadow: 2px 2px 2px $textShadowColor, 0 0 $deepCyan;
}
.cyan.backdrop {
  background: $cyan;
}
.lightBlue {
  background-color: $lightBlue;
}
.lightGreen {
  background-color: $lightGreen;
}
.blue {
  text-shadow: 2px 2px 3px $textShadowColor, 0 0 $deepBlue;
}
.green {
  text-shadow: 2px 2px 3px $textShadowColor, 0 0 $deepGreen;
}
</style>
