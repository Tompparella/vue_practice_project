<script setup lang="ts"></script>

<template>
  <view class="container">
    <h1 class="authenticationLabel">{{ $t("authentication.newAccount") }}</h1>
    <h3 class="label">{{ $t("authentication.email") }}</h3>
    <input class="emailInput" />
    <h3 class="label">{{ $t("authentication.password") }}</h3>
    <input type="password" class="passwordInput" />
    <h3 class="label">{{ $t("authentication.passwordVerify") }}</h3>
    <input type="password" class="passwordInput" />
  </view>
</template>

<style scoped lang="scss">
@import "../style.scss";
</style>
