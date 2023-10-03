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

const postRequest = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch("https://httpbin.org/post", options);

    if (response.ok) {
      const responseData = await response.json();
      console.log("Sent Data:", responseData.json);
    }
  } catch {
    console.error("Something goes wrong");
  }
};
const onSubmit = (e) => {
  e.preventDefault();
  const emailValue = getElementValue("email");
  const passwordValue = getElementValue("password");
  if (checkValidation(emailValue, passwordValue)) {
    console.log(emailValue);
    console.log(passwordValue);
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
  }
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
