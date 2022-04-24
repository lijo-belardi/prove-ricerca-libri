import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray, result } from "lodash";
import { getBook } from "./getBookList";
import { log, logErrors } from "./utility";

export const getbookElements = async (books) => {
  try {
    const singleBook = books.map((book) => {
      let title = get(book, "title", "Title Unknown")
      let key = get(book, 'key', 'Key Unknown')
      let authors = get(book, 'authors', 'Authors Unknown')
      return { title: title, key: key, authors: authors }
    })
    descriptionApiRequest(singleBook)
  } catch (error) {
    log('ERROR: bookElements function')
    logErrors(error)
  }
}

const descriptionApiRequest = async (singleBook) => {
  try {
    const getDescription = singleBook.forEach(async (element) => {
      const url = `https://openlibrary.org${element.key}.json`
      const response = await axios.get(url)
      let description = response.data.description
    });
    
  } catch (error) {
    log('ERROR: descriptionApiRequest function')
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
