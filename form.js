const root = document.getElementById("root");

const createNewEl = (el) => {
  return document.createElement(el);
};
const form = createNewEl("form");

const addNewAttr = (el, attr, val) => {
  return el.setAttribute(attr, val);
};

const appendSubEl = (parent, ...rest) => {
  rest.forEach((child) => {
    parent.appendChild(child);
  });
};

const getElementValue = (target) => {
  return document.getElementById(target).value;
};

const showValues = (passwordDiv, emailDiv) => {
  passwordDiv.textContent = getElementValue("email");
  emailDiv.textContent = getElementValue("password");
};

const hideValues = (passwordDiv, emailDiv) => {
  passwordDiv.textContent = "";
  emailDiv.textContent = "";
};

const onSubmit = async (e) => {
  e.preventDefault();
  const emailValue = getElementValue("email");
  const passwordValue = getElementValue("password");

  console.log(emailValue);
  console.log(passwordValue);

  hideValues(passwordDiv, emailDiv);
  showValues(passwordDiv, emailDiv);
};
const inputEmail = createNewEl("input");
addNewAttr(inputEmail, "type", "text");
addNewAttr(inputEmail, "id", "email");
addNewAttr(inputEmail, "placeholder", "Enter your email");

const inputPassword = createNewEl("input");
addNewAttr(inputPassword, "type", "text");
addNewAttr(inputPassword, "id", "password");
addNewAttr(inputPassword, "placeholder", "Enter your password");

const btnSub = createNewEl("button");
addNewAttr(btnSub, "type", "submit");
btnSub.textContent = "Submit";
btnSub.addEventListener("click", onSubmit);

const passwordDiv = createNewEl("div");
const emailDiv = createNewEl("div");

appendSubEl(form, inputEmail, inputPassword, btnSub, emailDiv, passwordDiv);

appendSubEl(root, form);
