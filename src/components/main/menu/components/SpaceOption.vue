<script setup lang="ts">
import { useContentStore } from "../../../../stores";
import { default as MenuEntry } from "./MenuEntry.vue";
import { useGetGuildQuery } from "../../../../hooks/queries";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const enabled = ref(true);
const content = storeToRefs(useContentStore());
const space = useGetGuildQuery(enabled, content.currentSpaceId); //TODO: When wanting to select university, refactor
const spaceOptions = computed(() => [space.data.value?.imageUrl ?? ""]);

const onSpacePress = () => {
  console.log("Space");
};
</script>

<template>
  <MenuEntry
    label="Current space"
    :options="spaceOptions"
    @onPress="onSpacePress"
  />
</template>
