<script setup lang="ts">
import { ref } from "vue";

type Props = {
  color: "red" | "green";
};
type Emits = {
  (e: "onPress"): void;
};
defineProps<Props>();
const emit = defineEmits<Emits>();
const timeout = ref<number>();
// Timeout to trigger animation effect. Timeout duration has to be set the same value as the animation duration (1000ms === 1s)
const getTimeout = () => setTimeout(() => (timeout.value = undefined), 800);
const handlePress = () => {
  if (timeout.value) {
    clearTimeout(timeout.value);
    timeout.value = undefined;
    setTimeout(() => (timeout.value = Number(getTimeout())), 10);
  } else {
    timeout.value = Number(getTimeout());
  }
  emit("onPress");
};
</script>
<template>
  <div @click="handlePress" :class="color" class="rate-button">
    <div class="inner">
      <i :class="color === 'red' ? 'las la-angry' : 'las la-laugh-squint'" />
    </div>
    <div :class="{ effect: !!timeout }" />
  </div>
</template>

<style scoped lang="scss">
@import "../../../style/constants.scss";
$iconSize: $buttonSize - 1.5rem;
$animationTime: 0.1s;
@keyframes fireworks-effect {
  0% {
    width: 1rem;
    opacity: 1;
  }
  80% {
    width: 10rem;
    opacity: 1;
    transform: translate(100% -50%);
  }
  100% {
    width: 10rem;
    opacity: 0;
    transform: translate(-50%, -33%);
  }
}
i {
  margin: auto;
  font-size: $iconSize;
  border-radius: $borderSoft;
}
i.la-angry {
  color: $deepRed;
}
i.la-laugh-squint {
  color: $deepGreen;
}
.rate-button {
  display: flex;
  position: relative;
  max-height: $buttonSize;
  border-radius: $border;
  box-shadow: 0 1px 4px 0 $shadowColor;
  transition: $animationTime ease all;
  -moz-transition: $animationTime ease all;
  &:hover {
    transform: scale(1.1);
    box-shadow: none;
  }
  &:active {
    transform: scale(1.2);
  }
}
.effect {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  width: 1vmin;
  aspect-ratio: 1;
  background: radial-gradient(circle, rgb(255, 191, 71) 1vmin, #0000 0) 10% 22%,
    radial-gradient(circle, yellow 1vmin, #0000 0) 33% 0%,
    radial-gradient(circle, rgb(255, 255, 138) 1vmin, #0000 0) 80% 60%,
    radial-gradient(circle, rgb(198, 255, 145) 1vmin, #0000 0) 60% 70%,
    radial-gradient(circle, rgb(150, 222, 255) 1vmin, #0000 0) 0% 80%,
    radial-gradient(circle, rgb(255, 179, 226) 1vmin, #0000 0) 17% 33%,
    radial-gradient(circle, rgb(255, 160, 160) 1vmin, #0000 0) 58% 0%,
    radial-gradient(circle, rgb(255, 246, 246) 1vmin, #0000 0) 90% 5%,
    radial-gradient(circle, rgb(249, 255, 194) 1vmin, #0000 0) 18% 60%,
    radial-gradient(circle, rgb(200, 255, 163) 1vmin, #0000 0) 45% 5%,
    radial-gradient(circle, rgb(150, 222, 255) 1vmin, #0000 0) 60% 70%,
    radial-gradient(circle, rgb(198, 255, 145) 1vmin, #0000 0) 5% 50%,
    radial-gradient(circle, rgb(255, 191, 71) 1vmin, #0000 0) 100% 50%,
    radial-gradient(circle, rgb(255, 179, 226) 1vmin, #0000 0) 33% 80%,
    radial-gradient(circle, rgb(255, 246, 246) 1vmin, #0000 0) 90% 25%;
  background-size: 0.5rem 0.5rem;
  background-repeat: no-repeat;
  opacity: 0;
  animation: fireworks-effect 0.8s 1;
}
.effect,
.effect::before,
.effect::after {
  content: "";
}
.effect::before {
  transform: translate(-50%, -50%) rotate(25deg) !important;
}
.effect::after {
  transform: translate(-50%, -50%) rotate(-37deg) !important;
}
.inner {
  margin: 0.5rem;
  border-radius: $borderSoft;
}
.red.rate-button {
  background-color: $red;
  border: 3px solid $redHover;
}
.red.rate-button .inner {
  background-color: $lightRed;
}
.green.rate-button {
  background-color: $green;
  border: 3px solid $redHover;
}
.green.rate-button .inner {
  background-color: $lightGreen;
}
</style>
