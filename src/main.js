import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppButton from "./components/appButton.vue";
Vue.component("app-button", AppButton);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import { BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVueIcons);

import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faUserSecret);

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
