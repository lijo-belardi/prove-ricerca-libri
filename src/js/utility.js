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
    button.addEventListener('click', logDescription)
  })
}

export const logDescription = () => {
  log('Hello world!!')
}