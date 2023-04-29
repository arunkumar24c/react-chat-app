// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnr1crSZC-qZAxvpwrc_Or4gTnBl37nNY",
  authDomain: "react-chat-e2455.firebaseapp.com",
  projectId: "react-chat-e2455",
  storageBucket: "react-chat-e2455.appspot.com",
  messagingSenderId: "20165311822",
  appId: "1:20165311822:web:b8f2056dff2e48d6b5b21f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
