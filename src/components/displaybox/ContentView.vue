<script setup lang="ts">
import { useLogoutMutation } from "@/hooks/queries/useLogoutMutation";
import type { TextContent } from "@/stores/constants";
import { Loading, Text } from "../common";
import { default as TextContentView } from "./TextContent.vue";
import { default as SelectedContent } from "./SelectedContent.vue";
import type { Content } from "@/types";

type Props = {
  hidden: boolean;
  loading?: boolean;
  textContent?: TextContent[];
  selectedContent?: Content;
};
defineProps<Props>();
const { mutate } = useLogoutMutation();
const onIconPress = () => {
  // Placeholder
  mutate();
};
</script>

<template>
  <div class="content-view">
    <i v-if="!hidden" class="icon las la-info-circle" @click="onIconPress" />
    <ul class="display">
      <div v-if="loading" class="loading">
        <Loading />
        <Text :label="$t('authentication.loading')" :type="'S'" />
      </div>
      <TextContentView
        v-else-if="textContent && textContent.length > 0"
        :content="textContent"
      />
      <SelectedContent v-else-if="selectedContent" :content="selectedContent" />
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
@import "../../style/mixins.scss";
.icon {
  @include display-icon;
}
.content-view {
  flex: 1;
  user-select: none;
}
.display {
  display: flex;
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
  overflow-y: scroll;
}
.loading {
  display: flex;
  align-items: center;
}
</style>
