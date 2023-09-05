const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");


function validatePassword() {
  if (password.value === confirmPassword.value) {
    confirmPassword.setCustomValidity("");
  } else {
    confirmPassword.setCustomValidity("Password Doesn't Match");
  }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);

// back button
document.addEventListener("DOMContentLoaded", function() {
  var backButton = document.getElementById("backButton");
  
  backButton.addEventListener("click", function() {
      window.history.back();
  });
});
