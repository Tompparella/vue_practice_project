<script setup lang="ts">
import { computed } from "vue";
import { default as MenuEntry } from "./MenuEntry.vue";

/* const enabled = ref(true);
const content = storeToRefs(useContentStore());
const space = useGetGuildQuery(enabled, content.currentSpaceId);
*/
const filterOptions = computed(() => ["123", "124", "125"]);

const onFilterPress = () => {
  console.log("Filter");
};
</script>

<template>
  <MenuEntry
    label="Current space"
    :options="filterOptions"
    @onPress="onFilterPress"
  />
</template>
