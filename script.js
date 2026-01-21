import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithRedirect, 
  getRedirectResult 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// 👉 BOTÓN GOOGLE
window.loginGoogle = function () {
  signInWithRedirect(auth, provider);
};

// 👉 CUANDO REGRESA DE GOOGLE
getRedirectResult(auth)
  .then(async (result) => {
    if (result && result.user) {
      const user = result.user;

      const ref = doc(db, "usuarios", user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, {
          nombre: user.displayName,
          email: user.email,
          puntos: 0
        });
      }

      document.querySelector("#userName").innerText = user.displayName;
      show("panel");
      cargarPuntos(user.uid);
    }
  })
  .catch((error) => {
    console.error(error);
    alert("Error al iniciar sesión");
  });

async function cargarPuntos(uid) {
  const ref = doc(db, "usuarios", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    document.querySelector("#points").innerText = snap.data().puntos + " pts";
  }
}
