import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import { loadFonts } from './plugins/webfontloader'
import { globalCookiesConfig } from "vue3-cookies";

globalCookiesConfig({
  expireTimes: "30d",
  path: "/Vuetar",
  // domain: "sidawg.github.io",
  secure: true,
  sameSite: "None",
});

// globalCookiesConfig({
//   expireTimes: "30d",
//   secure: true,
//   sameSite: "Strict",
// });

loadFonts()

createApp(App)
  .use(vuetify)

  .mount('#app')
