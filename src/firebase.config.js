// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZDjz3dFHnMM7OCilucxcwLw7hzkqhAGg",
  authDomain: "dentist-afeaf.firebaseapp.com",
  projectId: "dentist-afeaf",
  storageBucket: "dentist-afeaf.firebasestorage.app",
  messagingSenderId: "146594913957",
  appId: "1:146594913957:web:45330a2d562530d298774c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);