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

const inputEmail = createNewEl("input");
createNewAttr(inputEmail, "type", "text");
createNewAttr(inputEmail, "placeholder", "Enter your email");

const inputPassword = createNewEl("input");
createNewAttr(inputPassword, "type", "text");
createNewAttr(inputPassword, "placeholder", "Enter your password");

const btnSub = createNewEl("button");
createNewAttr(btnSub, "type", "submit");
btnSub.textContent = "Submit";

appSubEl(form, inputEmail);
appSubEl(form, inputPassword);
appSubEl(form, btnSub);

appSubEl(root, form);
