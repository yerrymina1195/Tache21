// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvhkCgVvTo97MxJNqsJGPClfpWoB4t9Hc",
  authDomain: "tache21-6457b.firebaseapp.com",
  projectId: "tache21-6457b",
  storageBucket: "tache21-6457b.appspot.com",
  messagingSenderId: "844490758544",
  appId: "1:844490758544:web:ad5c22ade4b13c63bfbb15",
  measurementId: "G-8277Q95JLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);