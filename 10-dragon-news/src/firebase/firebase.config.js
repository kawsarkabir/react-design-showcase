// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxA3BFULYR6T0B9F6mH1WfnxCSXnbihvY",
  authDomain: "dragon-news-recup.firebaseapp.com",
  projectId: "dragon-news-recup",
  storageBucket: "dragon-news-recup.appspot.com",
  messagingSenderId: "111972173262",
  appId: "1:111972173262:web:f5ba65a65438157b5e979f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app