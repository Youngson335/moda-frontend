import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import AuthPage from "./components/Pages/AuthPage";
import HomePage from "./components/Pages/HomePage";
import SneakersPage from "./components/Pages/SneakersPage.vue";

import store from "./store/index";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: HomePage },
  { path: "/about", component: AuthPage },
  { path: "/sneakers", component: SneakersPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
