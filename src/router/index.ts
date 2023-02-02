import { Authentication } from "../components";
import { createRouter, createWebHashHistory, type Router } from "vue-router";
import type { App } from "vue";

export enum Path {
  Main = '/',
  Authentication = '/authentication'
}

const routes = [
  {path: Path.Authentication, component: Authentication},
  {path: Path.Main, component: {template: '<h1>Toimii!<h1/>'}}
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default (app: App) => {
  app.use(router);
  return app;
};
