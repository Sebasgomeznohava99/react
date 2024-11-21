import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1B0v-Hoq_s30xk1kER9d3_PzauFlCBZc",
  authDomain: "ecommerce-6060.firebaseapp.com",
  projectId: "ecommerce-6060",
  storageBucket: "ecommerce-6060.firebasestorage.app",
  messagingSenderId: "931203668697",
  appId: "1:931203668697:web:3b1de2792a7d27449c7cc8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db