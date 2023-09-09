import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2VtzQCOgVuE-oTe9bzGuyZBGSRATu8ho",
  authDomain: "air-bnb-e0098.firebaseapp.com",
  databaseURL: "https://air-bnb-e0098-default-rtdb.firebaseio.com",
  projectId: "air-bnb-e0098",
  storageBucket: "air-bnb-e0098.appspot.com",
  messagingSenderId: "702649580056",
  appId: "1:702649580056:web:ef757fd5c78c0de97ba16d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export { auth, facebookProvider, googleProvider, githubProvider };
