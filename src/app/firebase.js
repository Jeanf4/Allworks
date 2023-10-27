import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCS625Oar7OJkBH4QRgFI2jxtA8FfdCKpM",
  authDomain: "login-js-firebase.firebaseapp.com",
  projectId: "login-js-firebase-452d6",
  storageBucket: "login-js-firebase.appspot.com",
  messagingSenderId: "55866353186",
  appId: "1:55866353186:web:66041f4a113d91319fcc7b",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
