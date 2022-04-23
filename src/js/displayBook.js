import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray } from "lodash";
import { getBook } from "./getBookList";


const bookList = document.getElementById('book-list')

export const displayBooks = async (books) => {
  let html = ''
  try {
    books.map((book) => {
      let title = get(book, "title", "Title Unknown")
      let key = get(book, 'key', 'Key Unknown')
      let authors = get(book, 'authors', 'Authors Unknown')

      if (Array.isArray(authors)) {
        if (authors.length <= 4) {authors = authors.map((author) => {
          return author.name;}).join(", ");
        } else {
          authors = `
          ${authors[0].name}, 
          ${authors[1].name}, 
          ${authors[2].name}, 
          ${authors[3].name} and others`;
        }
      }

      html += `
        <div class="book-container" data-id = "${key}">
            <div class="info-book">
            <h2>${title}</h2>
            <p>Authors: ${authors}</p>
            </div>
        </div>`;

      bookList.innerHTML = html

      keyFunction(key)
    }) 
  } catch (error) {
    console.log('displayBooks function Error');
    console.log(error.name);
    console.log(error.message);
  }
}

export const keyFunction = async (key) => {
  try {
    let arrayKey = [key]
    arrayKey.forEach((singleWork) => {
      const url = `https://openlibrary.org${singleWork}.json`
      const workResponse = await axios.get(url)
      //workResponse.then((result) => { result.data })
    })
  } catch (error) {
    console.log('keyFunction function Error');
    console.log(error.name);
    console.log(error.message);
  }
}