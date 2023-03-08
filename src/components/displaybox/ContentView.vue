<script setup lang="ts">
import type { Content } from "@/stores/constants";
import { Loading, Text } from "../common";

type Props = {
  loading?: boolean;
  content?: Content[];
};
defineProps<Props>();
</script>

<template>
  <ul class="display">
    <div v-if="loading" class="loading">
      <Loading />
      <Text :label="$t('authentication.loading')" :type="'S'" />
    </div>
    <li v-else v-for="(item, index) in content" :key="index">
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
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
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
.loading {
  display: flex;
  align-items: center;
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
