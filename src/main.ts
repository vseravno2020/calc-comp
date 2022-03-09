import { createApp } from "vue";
import { createPinia } from "pinia";

import { messages } from "@/locales/messages";
import { registerComponents } from "../plugins/injectComponents";
import type { VueI18n } from "vue-i18n";
import "./assets/tailwind.css";

import App from "./App.vue";
import { createI18n } from "vue-i18n";
// import router from './router'

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "ru",
  messages,
});
const app = createApp(App);

registerComponents(app);

app.use(createPinia());
app.use(i18n);
// app.use(router)

app.mount("#app");
