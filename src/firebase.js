import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6YHntIHodpvzNoWnEecSMVaxCNl0sBhE",
  authDomain: "wymanandthewolves-band.firebaseapp.com",
  projectId: "wymanandthewolves-band",
  storageBucket: "wymanandthewolves-band.appspot.com",
  messagingSenderId: "219247071826",
  appId: "1:219247071826:web:7ee1ecb70a53b3ff31058b",
};

export const firebaseApp = initializeApp(firebaseConfig);
