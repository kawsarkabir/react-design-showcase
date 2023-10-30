// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAAsinSxLYWg5GBQ8l6cjiBLwZUZM5GZw",
  authDomain: "coffee-store-6e5b8.firebaseapp.com",
  projectId: "coffee-store-6e5b8",
  storageBucket: "coffee-store-6e5b8.appspot.com",
  messagingSenderId: "226211964982",
  appId: "1:226211964982:web:46f3a3714fcae442705097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth