import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray } from "lodash";
import { getBook } from "./getBookList";
import { displayBookTitle } from "./displayBooks";

const bookList = document.getElementById('book-list')

export const getBookElements = async (books) => {
  let html = ''
  try {
    books.map((book) => {
      let title = get(book, "title", "Title Unknown")
      let key = get(book, 'key', 'Key Unknown')
      let authorsMainArray = get(book, 'authors', 'Authors Unknown')
      //console.log(authorsMainArray);
      


      //console.dir(singleBook);
      let authors = authorsMainArray.map((item) => {
        return item.name
      })


      //const singleBook = { key, title, authors }
      //console.log(authors);
      //console.log(singleBook);

      html += `
   
        <div class="book-container" data-id = "${key}">
            <div class="info-book">
            <h2>Title: ${title}</h2>
            <p>Authors: ${authors}</p>
            </div>
        </div>
    `;
      bookList.innerHTML = html
    })
  } catch (error) {
    console.log('geBookElements function Error');
    console.log(error.name);
    console.log(error.message);
  }
}