// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLOvENCqiLqG4jDFHGZw1yXYWZ4WUOgaw",
  authDomain: "event-management-8332c.firebaseapp.com",
  projectId: "event-management-8332c",
  storageBucket: "event-management-8332c.appspot.com",
  messagingSenderId: "653516464049",
  appId: "1:653516464049:web:07ab5715e157084e526790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth