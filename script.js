import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCaM8F7hhpUxeylhT6WiBdWMbmshl1AYMg",
  authDomain: "cafeteria-australiana.firebaseapp.com",
  projectId: "cafeteria-australiana",
  storageBucket: "cafeteria-australiana.firebasestorage.app",
  messagingSenderId: "1032577129093",
  appId: "1:1032577129093:web:51c8e186095ee362d867ec",
  measurementId: "G-EBCZMDZRVP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
