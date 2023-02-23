<script setup lang="ts">
import { Label } from "./common";
import { useCommonStore } from "../stores";
import { storeToRefs } from "pinia";
const common = useCommonStore();
const { headerLabel, headerSubLabel } = storeToRefs(common);
</script>
<template>
  <div v-if="headerLabel" class="header-container">
    <div class="header">
      <Label class="header-text" :label="headerLabel" type="L" />
      <Label
        v-if="!!headerSubLabel"
        class="sub-header"
        :label="headerSubLabel"
        type="S"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../style/constants.scss";
.header-container {
  flex: 1;
  display: flex;
  width: 100%;
}
.header {
  height: 90%;
  margin: auto;
  display: flex;
  padding: 10px 20px;
  user-select: none;
  border-radius: $border;
  flex-direction: column;
  background: white;
  box-shadow: 0px 2px 4px 0px $shadowColor;
}
.header-text {
  margin: auto;
  font-size: 56px;
  line-height: 0.1;
}
.sub-header {
  line-height: 1.3;
}
</style>
