<script setup lang="ts">
import { Button, Input, Label, LogoPicker } from "@/components/common";
import { useDisplayStore } from "@/stores";
import { onMounted, ref } from "vue";
import type {
  AuthenticationData,
  GuildData,
  UniversityData,
  FlairData,
} from "@/types";
import img_1 from "@/assets/images/logo_ebin.png";
import img_2 from "@/assets/images/logo_test.png";
import img_3 from "@/assets/images/logo_white.png";
import { useTranslation } from "i18next-vue";

const universityData: UniversityData[] = [
  { name: "Cluster Ry21321", id: "123", logo: img_3 },
  { name: "Ebin xD32132", id: "69", logo: img_2 },
  { name: "Paitakisa3321", id: "420", logo: img_1 },
];

const guildData: GuildData[] = [
  { name: "Cluster Ry", id: "123", logo: img_3 },
  { name: "Ebin xD", id: "69", logo: img_2 },
  { name: "Paitakisa", id: "420", logo: img_1 },
];

interface Emits {
  (e: "onRegisterClick", data: FlairData | AuthenticationData): void;
  (e: "onBackClick"): void;
}

const emit = defineEmits<Emits>();

const university = ref<UniversityData | null>(null);
const guild = ref<GuildData | null>(null);
const username = ref("");

const { t } = useTranslation();

const { setInstitutionContent } = useDisplayStore();
onMounted(() => setInstitutionContent());

const handleRegistrationClick = () => {
  if (username.value.length < 5) {
    alert(t("authentication.usernameLength"));
    return;
  }
  if (!!guild.value && !!university.value) {
    const accountData: FlairData = {
      username: username.value,
      guild: guild.value,
      university: university.value,
    };
    emit("onRegisterClick", accountData);
  } else {
    alert(t("authentication.intitutionNotPicked"));
  }
};
const handleUniversityPick = (data: UniversityData | null) =>
  university.value ? (university.value = null) : (university.value = data);
const handleGuildPick = (data: GuildData | null) => (guild.value = data);
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
          :institutionData="universityData"
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
      <div v-if="!!university" class="secondary-container" key="university">
        <Label
          :label="$t('common.guild')"
          type="M"
          color="green"
          :backdrop="true"
        />
        <LogoPicker
          :currentInstitution="guild"
          :institutionData="guildData"
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bottom-container {
  flex: 1;
}
.label {
  min-width: 200px;
  min-height: 35px;
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
