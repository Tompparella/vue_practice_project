<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Text } from "../common";
import { default as SpaceBox } from "./SpaceBox.vue";
import { default as LabelView } from "./LabelView.vue";
import { default as IconRow } from "./IconRow.vue";
import { useDisplayStore } from "../../stores";
const display = useDisplayStore();
const { content } = storeToRefs(display);
</script>
<template>
  <div class="container">
    <IconRow />
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
  </div>
</template>
<style scoped lang="scss">
@import "../../style/constants.scss";
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.display-box {
  flex: 1;
  display: flex;
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
  min-height: $headerHeight;
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
