import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppButton from "./components/appButton.vue";
import VueResource from "vue-resource";
Vue.component("app-button", AppButton);
Vue.use(VueResource);
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import { BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVueIcons);

import { ValidationProvider, ValidationObserver } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
import { RuleInstaller } from "@/helpers/validation_rule";
RuleInstaller();

// import Vuelidate from "vuelidate";
// Vue.use(Vuelidate);

// Register it globally

import { MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdCard);

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
Vue.http.options.root = "";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
