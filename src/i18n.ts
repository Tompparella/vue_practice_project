import i18next from "i18next";
import I18nVue from "i18next-vue";
import Backend from "i18next-http-backend";
import type { HttpBackendOptions } from "i18next-http-backend";
import type { App } from "vue";
//.use(LanguageDetector) // Could detect browser language here

const initialize = (app: App) => {
  i18next.use(Backend).init<HttpBackendOptions>({
    debug: true, // TODO: Change to false when moving to production
    lng: "en",
    fallbackLng: "en",
  });

  app.use(I18nVue, { i18next });
  return app;
};

export default initialize;
