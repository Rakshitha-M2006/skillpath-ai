import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRKZ6T8y3TEpbHo5I5V4U8Kht4HjyEgfg",
  authDomain: "smart-campus-assistant-7e7e6.firebaseapp.com",
  projectId: "smart-campus-assistant-7e7e6",
  storageBucket: "smart-campus-assistant-7e7e6.firebasestorage.app",
  messagingSenderId: "159204389488",
  appId: "1:159204389488:web:c4fb4fe9419a137f75bab5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);