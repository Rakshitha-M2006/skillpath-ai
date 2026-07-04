import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Add this
import { getStorage } from "firebase/storage";     // Add this

const firebaseConfig = {
  // ... (keep your existing config)
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);       // Export these
export const storage = getStorage(app);    // Export these