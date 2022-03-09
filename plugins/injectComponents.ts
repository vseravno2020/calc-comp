import baseBtn from "@/components/ui/BaseBtn.vue";
import type { App } from "vue";

export const registerComponents = (app: App<Element>): void => {
  app.component("base-btn", baseBtn);
};
