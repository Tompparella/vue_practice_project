<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Text } from ".";
import { useDisplayStore } from "../../stores";
const display = useDisplayStore();
const { content } = storeToRefs(display);
</script>
<template>
  <div class="container">
    <div class="paper">
      <li v-for="(item, index) in content" :key="index">
        <Text v-if="item.text" :label="item.text" :type="'M'" />
      </li>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../style/constants.scss";
.container {
  display: flex;
  flex: 1;
}
.paper {
  user-select: none;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 4px 1px $shadowColor inset;
  background: $displayBackground;
  border-radius: 5px;
  min-width: 350px;
  width: 21vw;
  padding: 10px;
  min-height: 75px;
  height: 7vh;
  font-weight: bold;
}
li {
  list-style: none;
  margin: 0;
}
</style>
