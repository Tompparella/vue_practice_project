<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Text } from "../common";
import { default as SpaceBox } from "./SpaceBox.vue";
import { default as LabelView } from "./LabelView.vue";
import { useDisplayStore } from "../../stores";
const display = useDisplayStore();
const { content } = storeToRefs(display);
</script>
<template>
  <div class="display-box">
    <LabelView />
    <ul class="display">
      <li v-for="(item, index) in content" :key="index">
        <Text
          v-if="item.text"
          :label="item.text"
          :type="'S'"
          :class="item.color"
        />
        <Text
          v-else-if="item.localizedText"
          :label="$t(item.localizedText)"
          :type="'S'"
          :class="item.color"
        />
      </li>
    </ul>
    <SpaceBox />
  </div>
</template>
<style scoped lang="scss">
@import "../../style/constants.scss";

.display-box {
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  padding-inline: 1.5rem;
  margin-block: 0.5rem;
  justify-content: center;
  align-items: flex-end;
}
.display {
  user-select: none;
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 4px 1px $shadowColor inset;
  background-color: $displayBackground;
  border-radius: $border;
  min-height: 11vh;
  max-height: 100%;
  font-weight: bold;
  flex-wrap: wrap;
  margin-inline: 0.5rem;
}
li {
  list-style: none;
}
p {
  text-indent: 5px;
  text-align: center;
}
.brown {
  color: $brown;
}
.lightBlue {
  color: $lightBlue;
}
.deepBlue {
  color: $deepBlue;
}
.deepGreen {
  color: $deepGreen;
}
.deepYellow {
  color: $deepYellow;
}
.pink {
  color: $pink;
}
.violet {
  color: $violet;
}
.deepCyan {
  color: $deepCyan;
}
.cyan {
  color: $cyan;
}
</style>
