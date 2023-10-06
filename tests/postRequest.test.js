const postRequest = require("../helpers.js");

test("it returns sent data: testPass and testEmail", async () => {
  const testEmail = "testEmail";
  const testPass = "testPass";
  const data = {
    emailValue: testEmail,
    passwordValue: testPass,
  };

  const result = await postRequest(data);

  expect(result).toEqual({
    emailValue: "testEmail",
    passwordValue: "testPass",
  });
});
