<script setup lang="ts">
import { ref } from "vue";
import { default as LabelEntry } from "./LabelEntry.vue";
import { useContentStore } from "@/stores";
import { computed } from "vue";
import type { ContentProfiling } from "@/types";

type Props = {
  hidden: boolean;
};

defineProps<Props>();

const contentStore = useContentStore();

const iconsVisible = ref(true);
const onIconPress = () => (iconsVisible.value = !iconsVisible.value);

const profiling = computed(() => {
  if (contentStore.selectedContent?.profiling) {
    const temp: ContentProfiling[] = {
      ...contentStore.selectedContent?.profiling,
    };
    temp.sort &&
      temp.sort((prev, next) => {
        const w1 = next.weight ?? 0;
        const w2 = prev.weight ?? 0;
        return w2 - w1;
      });
    return temp;
  }
  return [];
});
</script>

<template>
  <div class="label-view">
    <i v-if="!hidden" class="icon las la-tags" @click="onIconPress" />
    <ul
      v-if="!hidden"
      class="label-container"
      :class="!iconsVisible && 'slideOut'"
    >
      <LabelEntry v-for="{ tag } in profiling" :key="tag.id" :tag="tag" />
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
@import "../../style/mixins.scss";
.label-view {
  width: $headerHeight;
  height: 100%;
}
.label-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  transition: 0.5s all ease-in-out;
}
.icon {
  @include display-icon;
}
.slideOut {
  transform: translateX(-2rem);
  opacity: 0;
}
</style>
