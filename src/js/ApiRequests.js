import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray } from "lodash";
import { getbookElements } from "./getBookelements"
import { log, logErrors } from "./utility";
import { getBookDescription } from "./getBookDescription";

export const getBooksByGenres = async (searchItem) => {
  try {
    const url = `https://openlibrary.org/subjects/${searchItem}.json`
    const response = await axios.get(url)
    log(`getBooksByGenres - Response Status: ${response.status}`)
    let books = response.data.works

    getbookElements(books)
  } catch (error) {
    log('ERROR: getBook function');
    log(`getBooksByGenres - Response Status: ${response.status}`)
    logErrors(error);
  }
}

export const descriptionApiRequest = async (bookElements) => {
  try {
    const getDescription = bookElements.forEach(async (element) => {
      const url = `https://openlibrary.org${element.key}.json`
      const response = await axios.get(url)
      const description = get(response.data, 'description', 'No description for this book')
      getBookDescription(description)
    });
  } catch (error) {
    log('ERROR: descriptionApiRequest function')
    logErrors(error)
  }
}