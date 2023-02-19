<script setup lang="ts">
import { Label } from "./common";
import { useCommonStore } from "../stores";
import { storeToRefs } from "pinia";
const common = useCommonStore();
const { headerLabel, headerSubLabel } = storeToRefs(common);
</script>
<template>
  <view>
    <Label class="headerText" :label="headerLabel" type="L" />
    <Label
      v-if="!!headerSubLabel"
      class="subHeader"
      :label="headerSubLabel"
      type="S"
    />
  </view>
</template>

<style scoped lang="scss">
view {
  border-radius: 5px;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  width: 25vw;
  height: 100px;
  background: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.445);
}
.headerText {
  margin: auto;
  font-size: 56px;
  line-height: 0.1;
}
.subHeader {
  margin: 0;
  line-height: 1.3;
}
</style>
