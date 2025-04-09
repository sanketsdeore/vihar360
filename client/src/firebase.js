// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-app-1b6a8.firebaseapp.com",
  projectId: "mern-real-estate-app-1b6a8",
  storageBucket: "mern-real-estate-app-1b6a8.firebasestorage.app",
  messagingSenderId: "742122694709",
  appId: "1:742122694709:web:6ac61e00642f806fd2a97c",
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
