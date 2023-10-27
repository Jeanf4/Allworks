import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { auth } from "./app/firebase.js";

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginSuccess = document.getElementById("login-success");
  const signupSuccess = document.getElementById("signup-success");
  const signupError = document.getElementById("signup-error");
  const signupLink = document.querySelector(".signup-link a");

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = loginForm.querySelector("input[type='text']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Login - Email:", email);
      console.log("Login - Password:", password);

      loginSuccess.style.display = "block";

      setTimeout(function () {
        window.location.href = "app.html";
      }, 3000);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      if (error.code === "auth/user-not-found") {
        const loginError = document.getElementById("login-error");
        loginError.style.display = "block";
        loginError.textContent = "La cuenta no existe. Por favor, regístrate.";
      } else {
        const loginError = document.getElementById("login-error");
        loginError.style.display = "block";
        loginError.textContent =
          "Error al iniciar sesión. Por favor, inténtalo de nuevo.";
      }
    }
  });

  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = signupForm.querySelector("input[type='text']").value;
    const password = signupForm.querySelector("input[type='password']").value;

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Signup - Email:", email);
      console.log("Signup - Password:", password);

      signupSuccess.style.display = "block";

      setTimeout(function () {
        signupSuccess.style.display = "none";
      }, 3000);
    } catch (error) {
      console.error("Error al registrarse:", error);

      signupError.style.display = "block";
      signupError.textContent =
        "Error al registrar. Por favor, inténtalo de nuevo.";
    }
  });

  signupLink.addEventListener("click", function (e) {
    e.preventDefault();
    const loginBox = document.getElementById("login-box");
    const signupContainer = document.getElementById("signup-container");

    if (loginBox.style.display === "block") {
      loginBox.style.display = "none";
      signupContainer.style.display = "block";
    } else {
      loginBox.style.display = "block";
      signupContainer.style.display = "none";
    }
  });
});
