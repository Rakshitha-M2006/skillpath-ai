import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 1. Added this import

const firebaseConfig = {
  apiKey: "AIzaSyAcs801w3IiAavjLRpEMbbZ_Sr8K0DG3p8",
  authDomain: "skillpath-ai-ce4d0.firebaseapp.com",
  projectId: "skillpath-ai-ce4d0",
  storageBucket: "skillpath-ai-ce4d0.firebasestorage.app",
  messagingSenderId: "5450670757",
  appId: "1:5450670757:web:1be030135385d61470234c",
  measurementId: "G-N8EP55E7YC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); // 2. Added this line to export 'db'

export default app;