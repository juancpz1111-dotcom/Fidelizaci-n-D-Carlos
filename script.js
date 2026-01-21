import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCaM8F7hhpUxeylhT6WiBdWMbmshl1AYMg",
  authDomain: "cafeteria-australiana.firebaseapp.com",
  projectId: "cafeteria-australiana",
  storageBucket: "cafeteria-australiana.firebasestorage.app",
  messagingSenderId: "1032577129093",
  appId: "1:1032577129093:web:51c8e186095ee362d867ec",
  measurementId: "G-EBCZMDZRVP"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const loginBtn = document.getElementById("loginGoogle");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    signInWithRedirect(auth, provider);
  });
}


const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    location.reload();
  });
}


onAuthStateChanged(auth, (user) => {
  const loginSection = document.getElementById("login");
  const panelSection = document.getElementById("panel");

  if (user) {
  
    if (loginSection) loginSection.style.display = "none";
    if (panelSection) panelSection.style.display = "block";


    const nombre = document.getElementById("nombreUsuario");
    if (nombre) nombre.textContent = user.displayName || "Cliente";

  } else {

    if (loginSection) loginSection.style.display = "block";
    if (panelSection) panelSection.style.display = "none";
  }
});


getRedirectResult(auth).catch((error) => {
  console.error("Error en redirect:", error);
});
