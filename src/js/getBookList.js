import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray } from "lodash";
import { getBookElements } from "./getBookElements";

export const getBook = async (searchItem) => {
  try {
    const url = `https://openlibrary.org/subjects/${searchItem}.json`
    const response = await axios.get(url)
    let books = response.data.works
    console.log(response.status);

    getBookElements(books)
  } catch (error) {
    console.log(response.status);
    console.error(error.name);
    console.log(error.message);
    console.log(error.stack);
  }
}