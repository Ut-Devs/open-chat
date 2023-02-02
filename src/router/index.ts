import { createRouter, createWebHistory } from "vue-router";
import { CHAT } from "../router/Private/Chat";

const router = createRouter({
  history: createWebHistory(),
  routes: [CHAT],
});
export default router;
