import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/animate.css/animate.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import VueSweetalert2 from "vue-sweetalert2";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(VueSweetalert2).mount("#app");
