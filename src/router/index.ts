import { Authentication, Main } from "../components";
import { createRouter, createWebHistory, type Router } from "vue-router";
import type { App } from "vue";

export enum Path {
  Main = '/',
  Authentication = '/authentication',
  Missing = '/:patchMatch(.*)*'
}

const routes = [
  {path: Path.Authentication, component: Authentication},
  {path: Path.Main, component: Main},
  {path: Path.Missing, component: {template: '<h1>404<h1/>'}}
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default (app: App) => {
  app.use(router);
  return app;
};
