import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyC6YHntIHodpvzNoWnEecSMVaxCNl0sBhE",
  authDomain: "wymanandthewolves-band.firebaseapp.com",
  projectId: "wymanandthewolves-band",
  storageBucket: "wymanandthewolves-band.appspot.com",
  messagingSenderId: "219247071826",
  appId: "1:219247071826:web:7ee1ecb70a53b3ff31058b",
};

const app = initializeApp(firebaseConfig);

// TODO: remove for PROD
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Le0SOUiAAAAAODZ4xtfy6wJyo4gr0b_yMy9F-ur"),
  isTokenAutoRefreshEnabled: true,
});

// Get a Firestore instance
export const db = getFirestore(app);
