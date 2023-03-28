// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKpzuUfW8DO3S-2aYJv_I57g5Tms2FRSY",
  authDomain: "chatapp-af96e.firebaseapp.com",
  projectId: "chatapp-af96e",
  storageBucket: "chatapp-af96e.appspot.com",
  messagingSenderId: "760672930096",
  appId: "1:760672930096:web:e440c078d54bb5a7e7e0f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();