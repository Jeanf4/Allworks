import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./app/firebase.js";

const googleLogin = document.querySelector("#google-login123");

googleLogin.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
  } catch (error) {
    console.log(error);
  }
});
