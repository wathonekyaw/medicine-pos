// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-GkI9uw3tozD0NSfdzpXdGYUVCeDinJ0",
  authDomain: "pos-x-8feaa.firebaseapp.com",
  projectId: "pos-x-8feaa",
  storageBucket: "pos-x-8feaa.appspot.com",
  messagingSenderId: "403309226911",
  appId: "1:403309226911:web:fbc1c13b69f5804ec56baa",
  measurementId: "G-X2EV8SYSSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
