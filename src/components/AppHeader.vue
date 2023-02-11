<script setup lang="ts"></script>

<template>
  <view class="app-header">
    <h1 class="headerText">{{ $t("appName") }}</h1>
  </view>
</template>

<style scoped lang="scss">
.app-header {
  display: flex;
  width: 100%;
  justify-content: center;
}
.headerText {
  margin: 2vh;
}
</style>
