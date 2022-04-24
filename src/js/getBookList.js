import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray } from "lodash";
import { displayBooks, keyFunction } from "./displayBook";
import { log, logErrors } from "./utility";

export const getBook = async (searchItem) => {
  try {
    const url = `https://openlibrary.org/subjects/${searchItem}.json`
    const response = await axios.get(url)
    log(`getBook - Response Status: ${response.status}`)
    let books = response.data.works
    
    displayBooks(books)
    keyFunction(books)
  } catch (error) {
    log('ERROR: getBook function');
    logErrors(error);
  }
}

getBook('fantasy');