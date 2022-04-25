import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray, result } from "lodash";
import { getBook } from "./ApiRequests";
import { log, logErrors, modal } from "./utility";
import { getBookDescription } from "./getBookDescription";


export const displayBook = async (book) => {
  try {
    let html = ''
    const bookList = document.getElementById('book-list')
    book.forEach(element => {
      html += `
          <div class="book-container" data-id = "">
              <div class="book-title">
                <h2>${element.title}</h2>
              </div>

              <div class="book-authors">
                <h4>Authors: ${element.authors}</h4>
              </div>

              <div class="book-description">
              </div>
              <button class="description-btn">Read Description</button>
          </div>`;
    });
    bookList.innerHTML = html
    getBookDescription()
  } catch (error) {
    log('ERROR: displayBooks function')
    logErrors(error)
  }
}


/* const bookList = document.getElementById('book-list')

export const displayBooks = async (books) => {
  let html = ''
  try {
    books.map((book) => {
      let title = get(book, "title", "Title Unknown")
      let key = get(book, 'key', 'Key Unknown')
      let authors = get(book, 'authors', 'Authors Unknown')

      if (Array.isArray(authors)) {
        if (authors.length <= 4) {
          authors = authors.map((author) => {
            return author.name;
          }).join(", ");
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
    log('ERROR: displayBooks function')
    logErrors(error)
  }
}

export const keyFunction = async (key) => {
  try {
    let arrayKey = [key]
    arrayKey.forEach((singleWork) => {
      const url = `https://openlibrary.org${singleWork}.json`
      const workResponse = axios.get(url)
      workResponse
        .then((result) => {
          let bookDescription = result.data.description
          let arrayDescription = [bookDescription]
          log(arrayDescription)
        })
    })
  } catch (error) {
    log('keyFunction function Error')
    logErrors(error)
  }
} */
