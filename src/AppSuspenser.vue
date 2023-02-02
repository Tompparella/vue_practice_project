<script lang="ts">
import App from "./App.vue";
export default {
  name: "AppSuspenser",
  components: {
    App,
  },
};
</script>

<template>
  <Suspense>
    <template #default>
      <App />
    </template>
    <template #fallback>
      <div>
        <h1>Tämmöstä tänään</h1>
      </div>
    </template>
  </Suspense>
</template>
