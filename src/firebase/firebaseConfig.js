import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Pbb6rdWWzAmwOPRfVS0JQaC7IZAqtq8",
  authDomain: "e-commercetokio.firebaseapp.com",
  projectId: "e-commercetokio",
  storageBucket: "e-commercetokio.appspot.com",
  messagingSenderId: "338714955710",
  appId: "1:338714955710:web:8ff6566a441ef1fd45f3ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);