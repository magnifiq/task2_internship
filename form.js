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
    } finally {
      hideLoadingState();
    }

    const password = createNewEl("div");
    const email = createNewEl("div");
    appendSubEl(root, email, password);
    password.textContent = getElementValue("email");
    email.textContent = getElementValue("password");

    localStorage.setItem("savedPassword", passwordValue);
    localStorage.setItem("savedEmail", emailValue);

    document.getElementsByTagName("form")[0].reset();
    localStorage.removeItem("savedPassword");
    localStorage.removeItem("savedEmail");
  }
};
const inputEmail = createNewEl("input");
addNewAttr(inputEmail, "type", "text");
addNewAttr(inputEmail, "id", "email");
addNewAttr(inputEmail, "placeholder", "Enter your email");
const retrievedEmail = localStorage.getItem("savedPassword");
addNewAttr(inputEmail, "value", retrievedEmail);

const inputPassword = createNewEl("input");
addNewAttr(inputPassword, "type", "text");
addNewAttr(inputPassword, "id", "password");
addNewAttr(inputPassword, "placeholder", "Enter your password");
const retrievedPassword = localStorage.getItem("savedPassword");
addNewAttr(inputPassword, "value", retrievedPassword);

const btnSub = createNewEl("button");
addNewAttr(btnSub, "type", "submit");
btnSub.textContent = "Submit";
btnSub.addEventListener("click", onSubmit);

appendSubEl(form, inputEmail, inputPassword, btnSub);

appendSubEl(root, form);
