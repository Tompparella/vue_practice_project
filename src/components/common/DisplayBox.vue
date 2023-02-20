<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Text } from ".";
import { useDisplayStore } from "../../stores";
const display = useDisplayStore();
const { content } = storeToRefs(display);
</script>
<template>
  <div class="container">
    <ul class="paper">
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
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 4px 1px $shadowColor inset;
  background: $displayBackground;
  border-radius: 5px;
  min-width: 350px;
  width: 25vw;
  padding: 10px;
  min-height: 50px;
  height: fit-content;
  font-weight: bold;
  flex-wrap: wrap;
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
