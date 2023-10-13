const { checkValidation } = require('../helpers.js')

test('the output must be Please, enter the valid password', () => {
  console.log(checkValidation)
  expect(checkValidation('Email', '34')).toBe(false)
})