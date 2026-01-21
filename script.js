// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaM8F7hhpUxeylhT6WiBdWMbmshl1AYMg",
  authDomain: "cafeteria-australiana.firebaseapp.com",
  projectId: "cafeteria-australiana",
  storageBucket: "cafeteria-australiana.firebasestorage.app",
  messagingSenderId: "1032577129093",
  appId: "1:1032577129093:web:51c8e186095ee362d867ec",
  measurementId: "G-EBCZMDZRVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
