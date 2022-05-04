import { getBooksByGenres } from "./ApiRequests"

// global variables
const body = document.body

/* ------- Console shortcuts ------- */
// console.log function
export const log = (arg) => { console.log(arg); }

// console.log(error) function
export const logErrors = (error) => {
  console.log(`Error name: ${error.name}`);
  console.log(`Error message: ${error.message}`);
  console.log(`Error stack: ${error.stack}`);
}


/* ------- Description's modal function ------- */

export const descriptionModal = (description) => {
  log(description.value != null ? description.value : description)
}




/* ------- Other functions ------- */
// refresh function
export const refreshFunction = (e) => {
  e.preventDefault()
  window.location.reload()
}

// submit function
export const submitFunction = (e) => {
  // set variables
  const formErrorMessage = document.getElementById('error-message')
  const subject = e.target.querySelector('#search-input')
  const searchItem = subject.value.toLowerCase()

  e.preventDefault()

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



/* Appunti

 per ottenere la descrizione. 
 ${description.value != null ? description.value : description}
*/