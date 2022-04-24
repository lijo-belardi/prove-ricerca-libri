// console.log function
export const log = (arg) => { console.log(arg); }

// console.log(error) function
export const logErrors = (error) => {
  console.log(`Error name: ${error.name}`);
  console.log(`Error message: ${error.message}`);
  console.log(`Error stack: ${error.stack}`);
}