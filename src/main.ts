import { createApp } from "vue";
import "@assets/css/globals.scss";
import App from "./App.vue";
import router from "@router/index";

createApp(App).use(router).mount("#app");
