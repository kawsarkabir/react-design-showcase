// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT9h8EwsDTLhQti8vVIZ-l0xv5itgLd6E",
  authDomain: "brand-shop-630c5.firebaseapp.com",
  projectId: "brand-shop-630c5",
  storageBucket: "brand-shop-630c5.appspot.com",
  messagingSenderId: "491210875212",
  appId: "1:491210875212:web:21b420586360eaaad06fe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth