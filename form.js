const root = document.getElementById("root");
const form = createNewEl('form');

function createNewEl(el){
  return document.createElement(el);
}

function createNewAttr(el, atr, val){
  return el.setAttribute(atr, val);
}

function appSubEl(parent, child){
  return parent.appendChild(child);
}

function getEl(target){
  return document.getElementById(target).value;
}

function onSubmit(e){
  e.preventDefault();
  console.log(getEl("email"));
  console.log(getEl("password"));
}
const inputEmail = createNewEl("input");
createNewAttr(inputEmail, "type", "text");
createNewAttr(inputEmail, "id", "email");
createNewAttr(inputEmail, "placeholder", "Enter your email");

const inputPassword = createNewEl("input");
createNewAttr(inputPassword, "type", "text");
createNewAttr(inputPassword, "id", "password");
createNewAttr(inputPassword, "placeholder", "Enter your password");

const btnSub = createNewEl("button");
createNewAttr(btnSub, "type", "submit");
btnSub.textContent = "Submit";
btnSub.addEventListener("click", onSubmit);

appSubEl(form, inputEmail);
appSubEl(form, inputPassword);
appSubEl(form, btnSub);

appSubEl(root, form);
