const checkValidation = require("../helpers.js");

test("the output must be Please, enter the valid password", () => {
  expect(checkValidation("Email", 34)).toBe(false);
});
