
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9XzGv_TtnncgHvbkYbLgkrcwa8J3csEk",
  authDomain: "proyecto-integrador-a2acf.firebaseapp.com",
  projectId: "proyecto-integrador-a2acf",
  storageBucket: "proyecto-integrador-a2acf.firebasestorage.app",
  messagingSenderId: "909618514684",
  appId: "1:909618514684:web:30060af2909934b98de579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;