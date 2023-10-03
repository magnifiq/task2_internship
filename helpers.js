const createNewEl = (el) => {
  return document.createElement(el);
};
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

const checkValidation = (emailValue, passwordValue) => {
  if (emailValue.trim() === "") {
    console.error("Please, enter the email");
    return false;
  }
  if (passwordValue.trim() === "" && passwordValue.length < 5) {
    console.error("Please, enter the valid password");
    return false;
  }
  return true;
};

const hideLoadingState = () => {
  document.getElementById("loadingState").remove();
};
const saveValue = (name, value) => {
  return localStorage.setItem(name, value);
};

const clearValue = (name) => {
  return localStorage.removeItem(name);
};

const getValues = (...rest) => {
  return rest.map((child) => {
    return localStorage.getItem(child) || "";
  });
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
  } finally {
    hideLoadingState();
  }
};

export {
  createNewEl,
  addNewAttr,
  appendSubEl,
  getElementValue,
  checkValidation,
  postRequest,
  saveValue,
  hideLoadingState,
  clearValue,
  getValues,
};
