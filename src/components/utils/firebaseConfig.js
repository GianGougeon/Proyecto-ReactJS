// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoMpAhV66SEkSikZ-qHCLAt9Mft1mIFNk",
  authDomain: "proyecto-reactjs-5d082.firebaseapp.com",
  projectId: "proyecto-reactjs-5d082",
  storageBucket: "proyecto-reactjs-5d082.appspot.com",
  messagingSenderId: "782999466721",
  appId: "1:782999466721:web:9352e3f4804ef5d11ffda0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
