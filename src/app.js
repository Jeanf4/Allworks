import { signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { auth } from "./app/firebase.js";

document.addEventListener("DOMContentLoaded", function () {
  const logoutLink = document.getElementById("logout-link");

  logoutLink.addEventListener("click", function (e) {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Error al cerrar la sesión:", error);
      });
  });
});
