import { createApp } from "vue";
import { VueFire, VueFireAppCheck, VueFireAuth } from "vuefire";
import { ReCaptchaV3Provider } from "firebase/app-check";
import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "./firebase";

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
import {
  faTrash,
  faPen,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faInstagram,
  faSpotify,
  faApple,
  faYoutube,
  faTrash,
  faPen,
  faCircleXmark
);

/* create app */
const app = createApp(App);

app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAppCheck({
      provider: new ReCaptchaV3Provider(
        "6Le0SOUiAAAAAODZ4xtfy6wJyo4gr0b_yMy9F-ur"
      ),
      isTokenAutoRefreshEnabled: true,
      debug: import.meta.env.DEV,
    }),
    VueFireAuth(),
  ],
});

app.use(router);
app.component("fa-icon", FontAwesomeIcon);

app.mount("#app");
