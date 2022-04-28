import {getBooksByGenres} from "./ApiRequests"

// console.log function
export const log = (arg) => { console.log(arg); }

// console.log(error) function
export const logErrors = (error) => {
  console.log(`Error name: ${error.name}`);
  console.log(`Error message: ${error.message}`);
  console.log(`Error stack: ${error.stack}`);
}


export const modal = () => {
  const descriptionButton = document.querySelectorAll(".description-btn");

  descriptionButton.forEach((button) => {
    button.addEventListener('click', logDescription)})
}

export const logDescription = () => { log('Hello world!!')}

// refresh function
export const refreshFunction = (e) => {
  e.preventDefault()
  window.location.reload()
}

// submit function
export const submitFunction = (e) => {
  e.preventDefault()
  // set variables
  const formErrorMessage = document.getElementById('error-message')
  const subject = e.target.querySelector('#search-input')
  const searchItem = subject.value.toLowerCase()

  // searchItem conditions
  let messages = []
  if (subject.value === '' || subject.value == null) {
    messages.push('Subject is required!')
  }
  if (messages.length > 0) { 
    formErrorMessage.innerText = messages.join(', ') 
  }

  //function invocation
  getBooksByGenres(searchItem)
}