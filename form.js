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

const showLoadingState = () => {
  const loadingState = createNewEl("div");
  addNewAttr(loadingState, "id", "loadingState");
  loadingState.textContent = "Processing...";
  appendSubEl(form, loadingState);
};

const hideLoadingState = () => {
  document.getElementById("loadingState").remove();
};

const onSubmit = async (e) => {
  e.preventDefault();
  const emailValue = getElementValue("email");
  const passwordValue = getElementValue("password");

  if (emailValue.trim() == "") {
    console.error("Please, enter the email");
    return;
  } else if (passwordValue.trim() == "" && passwordValue.length < 5) {
    console.error("Please, enter the valid password");
    return;
  } else {
    console.log(emailValue);
    console.log(passwordValue);

    showLoadingState();
    const data = {
      emailValue,
      passwordValue,
    };
    postRequest(data);
    const password = createNewEl("div");
    const email = createNewEl("div");
    appendSubEl(root, email, password);
    password.textContent = getElementValue("email");
    email.textContent = getElementValue("password");

    saveValue("savedPassword", passwordValue);
    saveValue("savedEmail", emailValue);

    document.getElementsByTagName("form")[0].reset();
    clearValue("savedPassword");
    clearValue("savedEmail");
  }
};
const inputEmail = createNewEl("input");
addNewAttr(inputEmail, "type", "text");
addNewAttr(inputEmail, "id", "email");
addNewAttr(inputEmail, "placeholder", "Enter your email");
const [retrievedEmail, retrievedPassword] = getValues(
  "savedEmail",
  "savedPassword"
);
addNewAttr(inputEmail, "value", retrievedEmail);

const inputPassword = createNewEl("input");
addNewAttr(inputPassword, "type", "text");
addNewAttr(inputPassword, "id", "password");
addNewAttr(inputPassword, "placeholder", "Enter your password");
addNewAttr(inputPassword, "value", retrievedPassword);

const btnSub = createNewEl("button");
addNewAttr(btnSub, "type", "submit");
btnSub.textContent = "Submit";
btnSub.addEventListener("click", onSubmit);

const passwordDiv = createNewEl("div");
const emailDiv = createNewEl("div");

appendSubEl(form, inputEmail, inputPassword, btnSub, emailDiv, passwordDiv);

appendSubEl(root, form);
