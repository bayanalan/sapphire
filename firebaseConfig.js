// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.VITE_FIREBASE_API_KEY,
  authDomain: "maverick-white.firebaseapp.com",
  projectId: "maverick-white",
  storageBucket: "maverick-white.appspot.com",
  messagingSenderId: "479075900029",
  appId: "1:479075900029:web:0c54785aee8aa81bdbaf14",
  measurementId: "G-LVSM3EFYEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
