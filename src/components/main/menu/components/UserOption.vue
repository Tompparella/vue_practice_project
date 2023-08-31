<script setup lang="ts">
import { useUserStore } from "../../../../stores";
import { default as MenuEntry } from "./MenuEntry.vue";
import { useGetGuildQuery } from "../../../../hooks/queries";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const enabled = ref(true);
const user = storeToRefs(useUserStore());
const homeGuildId = computed(() => user.userData.value?.guildId);
const homeData = useGetGuildQuery(enabled, homeGuildId);
const homeOptions = computed(() => [homeData.data.value?.imageUrl ?? ""]);
const profileOptions = computed(() => [
  user.userData.value?.profile.imageUrl ?? "",
]);
const onHomePress = () => {
  console.log("Home");
};
const onProfilePress = () => {
  console.log("Profile");
};
</script>

<template>
  <div class="row">
    <MenuEntry
      :label="$t('spaceMenu.home')"
      :options="homeOptions"
      @onPress="onHomePress"
    />
    <MenuEntry
      :label="$t('spaceMenu.profile')"
      :options="profileOptions"
      @onPress="onProfilePress"
    />
  </div>
</template>

<style scoped lang="scss">
.row {
  flex: 1;
  display: flex;
  width: 100%;
}
</style>
