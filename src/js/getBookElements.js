import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray } from "lodash";
import { getBook } from "./getBookList";
import { displayBookTitle } from "./displayBooks";

export const getBookElements = async (books) => {
  books.map((book) => { 
    let title = get(book, "title", "Title Unknown")
    let key = get(book, 'key', 'Key Unknown') 
    let authors = get(book, 'authors', 'Authors Unknown')
  })
}



