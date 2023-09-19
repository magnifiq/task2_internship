(function () {
  "use strict";
  const root = document.getElementById("root");
  const form = document.createElement("form");


  const inputEmail = document.createElement("input");
  inputEmail.type = "text";
  inputEmail.placeholder = "Enter your email";


  const inputPassword = document.createElement("input");
  inputPassword.type = "text";
  inputPassword.placeholder = "Enter your password";

  const btnSub = document.createElement("button");
  btnSub.type = "submit";
  btnSub.textContent = "Submit";

 
  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(btnSub);

  root.appendChild(form);
})();
