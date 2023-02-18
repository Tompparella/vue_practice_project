import { createRouter, createWebHistory, type Router } from "vue-router";
import type { App } from "vue";
import { default as Authentication } from "../components/authentication/AuthenticationView.vue";
import { default as Main } from "../components/main/MainView.vue"; // These imports suck

export enum Path {
  Main = "/",
  Authentication = "/authentication",
  Missing = "/:patchMatch(.*)*",
}

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: Path.Authentication, component: Authentication },
    { path: Path.Main, component: Main },
    { path: Path.Missing, component: { template: "<h1>404<h1/>" } },
  ],
});

export default (app: App) => {
  app.use(router);
  return app;
};
