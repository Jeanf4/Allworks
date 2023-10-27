document.addEventListener("DOMContentLoaded", function () {
  const signupLink = document.querySelector(".signup-link a");
  const signupContainer = document.getElementById("signup-container");
  const loginBox = document.getElementById("login-box");

  // Ocultar el formulario de registro al cargar la página
  signupContainer.style.display = "none";

  signupLink.addEventListener("click", function (e) {
    e.preventDefault();

    if (signupContainer.style.display === "block") {
      signupContainer.style.display = "none";
      loginBox.style.display = "block";
    } else {
      signupContainer.style.display = "block";
      loginBox.style.display = "none";
    }
  });
});
