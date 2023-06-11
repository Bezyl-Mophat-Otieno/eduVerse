// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// for authentication with google Firebase`
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrynfiaHyb78AgRio8d7rKbJQQ7jT2YGU",
  authDomain: "eduverse-7cbbd.firebaseapp.com",
  projectId: "eduverse-7cbbd",
  storageBucket: "eduverse-7cbbd.appspot.com",
  messagingSenderId: "216801409563",
  appId: "1:216801409563:web:d9e00a13bff60b858356be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// For authentication with google Firebase
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;