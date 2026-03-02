// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "interviewiq-9c238.firebaseapp.com",
  projectId: "interviewiq-9c238",
  storageBucket: "interviewiq-9c238.firebasestorage.app",
  messagingSenderId: "665518421843",
  appId: "1:665518421843:web:347202269de56217c353a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider }; 