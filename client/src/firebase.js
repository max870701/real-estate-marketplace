// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-marketplace-afc7a.firebaseapp.com",
  projectId: "real-estate-marketplace-afc7a",
  storageBucket: "real-estate-marketplace-afc7a.appspot.com",
  messagingSenderId: "306912696439",
  appId: "1:306912696439:web:75437f9619e5968bc38e72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);