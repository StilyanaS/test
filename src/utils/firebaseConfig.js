// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj7sYp35dgGLJYYXyuWaXAEzwj08FgrDw",
  authDomain: "my-react-project-9947a.firebaseapp.com",
  projectId: "my-react-project-9947a",
  storageBucket: "my-react-project-9947a.appspot.com",
  messagingSenderId: "586833595609",
  appId: "1:586833595609:web:3408eab1d8d335003842c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore();

export default db