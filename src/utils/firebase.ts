// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "blog-app-399421.firebaseapp.com",
  projectId: "blog-app-399421",
  storageBucket: "blog-app-399421.appspot.com",
  messagingSenderId: "532582085015",
  appId: "1:532582085015:web:09dcdc71f1daf34ba294d2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
