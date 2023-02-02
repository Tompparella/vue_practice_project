import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./i18n";
import App from './App.vue';

import router from "./router";

import "./assets/main.scss";

const app = createApp(App);

i18n(app);
router(app)

app.use(createPinia());
app.use(router);

app.mount("#app");
