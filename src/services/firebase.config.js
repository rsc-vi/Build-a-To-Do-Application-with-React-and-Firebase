// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnw4X5fZsNDiwYnew2JIf_JVpC0bVdYuE",
  authDomain: "todo-c8b07.firebaseapp.com",
  projectId: "todo-c8b07",
  storageBucket: "todo-c8b07.appspot.com",
  messagingSenderId: "595509319312",
  appId: "1:595509319312:web:e005b840002771df62aa15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);