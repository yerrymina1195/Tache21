// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpGTM1tluyzC81TShY6op-tSyZUIUSkWE",
  authDomain: "modifier-profile.firebaseapp.com",
  projectId: "modifier-profile",
  storageBucket: "modifier-profile.appspot.com",
  messagingSenderId: "54273998326",
  appId: "1:54273998326:web:0a611fb0a38c0eee3d1bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);