const signinbtn = document.querySelector("#signinbtn");
const signupbtn = document.querySelector("#signupbtn");
const buttonholder = document.querySelector("#buttonholder");
const formsContainer = document.querySelector("#formsContainer");
const showpassword = document.querySelector("#showpassword");
const showSignUpPassword = document.querySelector("#showSignUpPassword");
const signUppassword2 = document.querySelector("#signUppassword2");
const password = document.querySelector("#password");

// page slider
signinbtn.addEventListener("click", () => {
  formsContainer.classList.remove("-translate-x-1/2");
  buttonholder.classList.remove("translate-x-full");
});
signupbtn.addEventListener("click", () => {
  formsContainer.classList.add("-translate-x-1/2");
  buttonholder.classList.add("translate-x-full");
});

// password changer
showSignUpPassword.addEventListener("click", () => {
  if (signUppassword2.getAttribute("type") === "password") {
    signUppassword2.setAttribute("type", "text");
  } else {
    signUppassword2.setAttribute("type", "password");
  }
});
showpassword.addEventListener("click", () => {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
