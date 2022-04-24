import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray } from "lodash";
import { getbookElements } from "./displayBook";
import { log, logErrors } from "./utility";

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

