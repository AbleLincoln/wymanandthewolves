import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

/* Font Awesome Icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faInstagram,
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faSpotify, faApple, faYoutube);

const app = createApp(App);

app.component("fa-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
