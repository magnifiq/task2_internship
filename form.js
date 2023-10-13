import {
  createNewEl,
  addNewAttr,
  appendSubEl,
  getElementValue,
  checkValidation,
  postRequest,
  saveValue,
  clearValue,
  getValues,
} from './helpers.js'

const root = document.getElementById('root')
const form = createNewEl('form')

const showLoadingState = () => {
  const loadingState = createNewEl('div')
  addNewAttr(loadingState, 'id', 'loadingState')
  loadingState.textContent = 'Processing...'
  appendSubEl(form, loadingState)
}

const onSubmit = (e) => {
  e.preventDefault()
  const emailValue = getElementValue('email')
  const passwordValue = getElementValue('password')
  if (checkValidation(emailValue, passwordValue)) {
    console.log(emailValue)
    console.log(passwordValue)
    showLoadingState()
    const data = {
      emailValue,
      passwordValue,
    }
    postRequest(data)
    clearValue('savedPassword')
    clearValue('savedEmail')
    saveValue('savedPassword', passwordValue)
    saveValue('savedEmail', emailValue)
    passwordDiv.textContent = retrievedPassword
    emailDiv.textContent = retrievedEmail
    document.getElementsByTagName('form')[0].reset()
  }
}
const inputEmail = createNewEl('input')
addNewAttr(inputEmail, 'type', 'text')
addNewAttr(inputEmail, 'id', 'email')
addNewAttr(inputEmail, 'placeholder', 'Enter your email')
const [retrievedEmail, retrievedPassword] = getValues(
  'savedEmail',
  'savedPassword',
)
addNewAttr(inputEmail, 'value', retrievedEmail)

const inputPassword = createNewEl('input')
addNewAttr(inputPassword, 'type', 'text')
addNewAttr(inputPassword, 'id', 'password')
addNewAttr(inputPassword, 'placeholder', 'Enter your password')
addNewAttr(inputPassword, 'value', retrievedPassword)

const btnSub = createNewEl('button')
addNewAttr(btnSub, 'type', 'submit')
btnSub.textContent = 'Submit'
btnSub.addEventListener('click', onSubmit)

const passwordDiv = createNewEl('div')
const emailDiv = createNewEl('div')

appendSubEl(form, inputEmail, inputPassword, btnSub, emailDiv, passwordDiv)

appendSubEl(root, form)
