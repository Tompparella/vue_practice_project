import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";
import { createPinia } from "pinia";
import i18n from "./i18n";
import App from "./App.vue";
import axios from "axios";

import router from "./router";

import "./assets/main.scss";
import { Environment } from "./utils";

const checkEnvironment = () => {
  const baseURL = Environment.API_URL;
  if (!baseURL) {
    throw new Error("Environment variable VITE_API_URL not set!");
  }
};

checkEnvironment();

axios.defaults.baseURL = Environment.API_URL;
axios.defaults.withCredentials = true;

const app = createApp(App);

app.use(VueQueryPlugin);

i18n(app);

app.use(createPinia());

router(app);

app.mount("#app");
