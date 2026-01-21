// 🔥 Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ⚙️ CONFIGURACIÓN FIREBASE (PEGA LA TUYA AQUÍ)
const firebaseConfig = {
  apiKey: "AIzaSyCaM8F7hhpUxeylhT6WiBdWMbmshl1AYMg",
  authDomain: "cafeteria-australiana.firebaseapp.com",
  projectId: "cafeteria-australiana",
  storageBucket: "cafeteria-australiana.firebasestorage.app",
  messagingSenderId: "1032577129093",
  appId: "1:1032577129093:web:51c8e186095ee362d867ec",
  measurementId: "G-EBCZMDZRVP"
};

// 🚀 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// 👉 BOTÓN LOGIN GOOGLE
window.loginGoogle = async function () {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const ref = doc(db, "usuarios", user.uid);
    const snap = await getDoc(ref);

    // Si es nuevo usuario, crearle puntos
    if (!snap.exists()) {
      await setDoc(ref, {
        nombre: user.displayName,
        email: user.email,
        puntos: 0
      });
    }

    // Ir al panel
    show("panel");
    document.querySelector("#userName").innerText = user.displayName;

    cargarPuntos(user.uid);

  } catch (error) {
    alert("Error al iniciar sesión");
    console.error(error);
  }
};

// 👉 MOSTRAR PUNTOS
async function cargarPuntos(uid) {
  const ref = doc(db, "usuarios", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    document.querySelector("#points").innerText = snap.data().puntos + " pts";
  }
}

// 👉 ESCUCHAR SESIÓN
onAuthStateChanged(auth, (user) => {
  if (user) {
    cargarPuntos(user.uid);
  }
});
