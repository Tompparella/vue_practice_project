<script setup lang="ts">
import { Text } from "../common";
import defaultImage from "../../assets/images/logo_test.png";
import type { Content } from "@/types";

type Props = {
  content: Content;
};
defineProps<Props>();
</script>

<template>
  <div class="content-info">
    <div class="institution-container">
      <img :src="content.guild.university.imageUrl" class="institution-image" />
      <Text type="XS" :label="content.guild.university.name" />
    </div>
    <div class="content-card">
      <img
        class="profile-image"
        :src="content.creator.profile.imageUrl ?? defaultImage"
      />
      <div class="content-text">
        <div class="institution-info">
          <Text type="XS" :label="content.guild.name" class="deepCyan" />
          <Text
            type="XS"
            :label="content.guild.university.name"
            class="deepGreen"
          />
        </div>
        <Text
          type="S"
          :label="content.creator.profile.username ?? ''"
          class="username"
        />
      </div>
      <div class="content-title">
        <Text type="S" :label="content.title" />
      </div>
    </div>
    <div class="institution-container">
      <img :src="content.guild.imageUrl" class="institution-image" />
      <Text type="XS" :label="content.guild.name" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/constants.scss";
.institution-container,
.content-text,
.content-info {
  flex: 1;
  transition: 0.5s all ease;
}
.content-info {
  display: flex;
}
.content-title {
  flex: 2;
}
.content-text {
  margin-inline: 0.25rem;
  padding-inline: 0.25rem;
  border-left: 2px solid $cyan;
  border-right: 2px solid $cyan;
}
.institution-container {
  margin: auto;
  padding: 0.25rem 0.5rem;
  text-align: center;
}
.institution-image {
  max-height: 4.5rem;
  border-radius: $borderSoft;
}
.profile-image {
  width: 4rem;
  height: 4rem;
  margin: 0.3rem;
  border-radius: $borderSharp;
}
.content-card {
  flex: 8;
  height: inherit;
  display: flex;
  margin-block: 0.5rem;
  background-color: $lightCyan;
  border-radius: $borderSharp;
  box-shadow: 0 2px 4px 0 $borderColor;
  align-items: center;
  overflow: auto;
}
.username {
  text-align: center;
}
.institution-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.deepGreen {
  color: $deepGreen;
}
.deepCyan {
  color: $deepCyan;
}
</style>
