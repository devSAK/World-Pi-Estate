// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "world-pi-estate.firebaseapp.com",
  projectId: "world-pi-estate",
  storageBucket: "world-pi-estate.appspot.com",
  messagingSenderId: "1035258774658",
  appId: "1:1035258774658:web:8bda1a1488c7a9a94c609b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
