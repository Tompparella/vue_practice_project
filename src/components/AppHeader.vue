<script setup lang="ts">
import { Label } from "./common";
import { useCommonStore } from "../stores";
import { storeToRefs } from "pinia";
const common = useCommonStore();
const { headerLabel, headerSubLabel } = storeToRefs(common);
</script>
<template>
  <div>
    <view>
      <Label class="headerText" :label="headerLabel" type="L" />
      <Label
        v-if="!!headerSubLabel"
        class="subHeader"
        :label="headerSubLabel"
        type="S"
      />
    </view>
  </div>
</template>

<style scoped lang="scss">
@import "../style/constants.scss";
div {
  display: flex;
  flex: 1;
}
view {
  user-select: none;
  border-radius: 5px;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  width: 18vw;
  min-height: 100px;
  height: 8vh;
  background: white;
  box-shadow: 0px 2px 4px 0px $shadowColor;
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
