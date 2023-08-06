<script setup lang="ts">
import type { TextContent } from "@/stores/constants";
import { Text } from "../common";

type Props = {
  content?: TextContent[];
};
defineProps<Props>();
</script>

<template>
  <li v-for="(item, index) in content" :key="index">
    <Text v-if="item.text" :label="item.text" :type="'S'" :class="item.color" />
    <Text
      v-else-if="item.localizedText"
      :label="$t(item.localizedText)"
      :type="'S'"
      :class="item.color"
    />
  </li>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
@import "../../style/mixins.scss";
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
