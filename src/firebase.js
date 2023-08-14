
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4JdVYN6OHSWBqCP2Q4wcnywJ9liodjok",
  authDomain: "chat-efd47.firebaseapp.com",
  projectId: "chat-efd47",
  storageBucket: "chat-efd47.appspot.com",
  messagingSenderId: "843394110172",
  appId: "1:843394110172:web:76e18759fff35aced31a19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();