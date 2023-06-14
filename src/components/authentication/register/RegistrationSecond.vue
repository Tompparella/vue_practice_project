<script setup lang="ts">
import { Button, Input, Label, LogoPicker } from "@/components/common";
import { useDisplayStore, useRegistrationStore } from "@/stores";
import { onMounted, ref } from "vue";
import type { FlairData, InstitutionData } from "@/types";
import { useTranslation } from "i18next-vue";
import { useGetUniversitiesQuery, useGetGuildsMutation } from "@/hooks/queries";
/*
const universityData: UniversityData[] = [
  { name: "Cluster Ry21321", id: "1", logo: img_3 },
  { name: "Ebin xD32132", id: "2", logo: img_2 },
  { name: "Paitakisa3321", id: "3", logo: img_1 },
];

const guildData: GuildData[] = [
  { name: "Cluster Ry", id: "1", logo: img_3 },
  { name: "Ebin xD", id: "2", logo: img_2 },
  { name: "Paitakisa", id: "3", logo: img_1 },
];
 */
interface Emits {
  (e: "onRegisterClick"): void;
  (e: "onBackClick"): void;
}

const emit = defineEmits<Emits>();

const { t } = useTranslation();
const { setInstitutionContent } = useDisplayStore();
const { setFlairData } = useRegistrationStore();

const university = ref<InstitutionData | null>(null);
const guild = ref<InstitutionData | null>(null);
const username = ref("");

const universityQuery = useGetUniversitiesQuery();
const guildQuery = useGetGuildsMutation();

onMounted(() => setInstitutionContent());

const handleRegistrationClick = () => {
  if (username.value.length < 5) {
    alert(t("authentication.usernameLength"));
    return;
  }
  if (!!guild.value && !!university.value) {
    const accountData: FlairData = {
      username: username.value,
      guildId: guild.value.id,
    };
    setFlairData(accountData);
    emit("onRegisterClick");
  } else {
    alert(t("authentication.intitutionNotPicked"));
  }
};

const handleUniversityPick = (data: InstitutionData | null) => {
  if (university.value !== data && data?.id) {
    guildQuery.mutate(data.id);
  }
  university.value = data;
};
const handleGuildPick = (data: InstitutionData | null) => {
  guild.value = data;
};
</script>
<template>
  <div class="main-container">
    <TransitionGroup name="group">
      <div class="secondary-container" key="guild">
        <Label
          :label="$t('common.university')"
          type="M"
          color="cyan"
          :backdrop="true"
        />
        <LogoPicker
          :currentInstitution="university"
          :institutionData="universityQuery.data.value"
          @onPick="handleUniversityPick"
          class="picker"
        />
        <Label
          class="label"
          :label="university?.name ?? ''"
          type="S"
          :backdrop="true"
          :inset="true"
        />
      </div>
      <div
        v-if="Boolean(university)"
        class="secondary-container"
        key="university"
      >
        <Label
          :label="$t('common.guild')"
          type="M"
          color="green"
          :backdrop="true"
        />
        <LogoPicker
          :currentInstitution="guild"
          :institutionData="guildQuery.data?.value"
          @onPick="handleGuildPick"
          class="picker"
        />
        <Label
          class="label"
          :label="guild?.name ?? ''"
          type="S"
          :backdrop="true"
          :inset="true"
        />
      </div>
    </TransitionGroup>
  </div>
  <div class="bottom-container">
    <Label :label="$t('common.username')" type="M" color="violet" />
    <Input v-model="username" />
    <Button
      :label="$t('common.ready')"
      color="green"
      :bold="true"
      @onPress="handleRegistrationClick"
    />
    <Button
      :label="$t('common.goBack')"
      color="blue"
      @onPress="$emit('onBackClick')"
    />
  </div>
</template>

<style scoped lang="scss">
.main-container {
  width: 80%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
}
.secondary-container,
.bottom-container {
  flex: 1;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 3rem;
}

// Transitions

.group-move,
.group-enter-active,
.group-leave-active {
  transition: all 0.5s ease-in-out;
}

.group-enter-from,
.group-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.group-leave-active {
  position: absolute;
}
</style>
