import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray } from "lodash";
import { getBookElements } from "./getBookElements";

export const getBook = async (searchItem) => {
  try {
    const url = `https://openlibrary.org/subjects/${searchItem}.json`
    const response = await axios.get(url)
    console.log(`getBook - Response Status: ${response.status}`);
    let books = response.data.works
    getBookElements(books)
    
  } catch (error) {
    console.log('getBook Error');
    console.error(`Error name: ${error.name}`);
    console.log(`Error message: ${error.message}`);
    console.log(`Error stack: ${error.stack}`);
  }
}

getBook('fantasy')