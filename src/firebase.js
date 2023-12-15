// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGs1TH3XX7abYdCZehx3q68EpHQbAOtdQ",
  authDomain: "disneyclone-3f701.firebaseapp.com",
  projectId: "disneyclone-3f701",
  storageBucket: "disneyclone-3f701.appspot.com",
  messagingSenderId: "1081707159738",
  appId: "1:1081707159738:web:e8aceac3a8cba89ce5e283",
  measurementId: "G-Z3D0VDYVDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
