import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray } from "lodash";
import { getBookElements } from "./getBookElements"
import { displayBookDescription, modal} from "./displayBookDescription"
import { log, logErrors, descriptionModal } from "./utility";


// Request - get Book list
export const getBooksByGenres = async (searchItem) => {
  try {
    const url = `https://openlibrary.org/subjects/${searchItem}.json`
    const response = await axios.get(url)
    log(`getBooksByGenres - Response Status: ${response.status}`)
    let books = response.data.works

    getBookElements(books)
    getCovers(books)
    displayBookDescription()
  } catch (error) {
    log('ERROR: getBooksByGenres function');
    log(`getBooksByGenres - Response Status: ${response.status}`)
    logErrors(error);
  }
}

// Request - get Description
export const descriptionRequest = async (key) => {
  try {
    let url = `https://openlibrary.org${key}.json`;
    const response = await axios.get(url);
    const description = get(response.data, 'description', 'No description for this book.')
    descriptionModal(description)
  } catch (error) {
      logErrors(error)
  }
}


export const getCovers = (books) => {
  books.forEach(book => {getImg(book.cover_edition_key)});
  };


export const getImg = (coverKey) => {
  const imgs = document.querySelectorAll('.cover')
  let html = ''
  imgs.forEach(img => {
    html = `<img src="https://covers.openlibrary.org/b/olid/${coverKey}-M.jpg">`
    img.innerHTML = html
  });
  
}