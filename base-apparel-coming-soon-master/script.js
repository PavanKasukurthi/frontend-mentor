const form = document.querySelector('form')
const email = document.querySelector('form input[type=email]')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let emailValue = email.value
  if (validateEmail(emailValue)) {
    form.classList.remove('error')
  } else {
    form.classList.add('error')
  }
})

const validateEmail = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}
