import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray, result } from "lodash";
import { getBook } from "./getBookList";
import { log, logErrors } from "./utility";

const bookList = document.getElementById('book-list')

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
    throw blblbl
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
          //console.log(typeof(arrayDescription));
          //log(arrayDescription)
        })

    })
  } catch (error) {
    log('keyFunction function Error')
    logErrors(error)
  }
}






/* export const keyFunction = async (books) => {
  try {
    let keyValue = books.map((book) => { return get(book, 'key', 'Key Unknown')})
    console.log(keyValue);


    let bookDescription = keyValue.map( (singleValue) => {
      const url = `https://openlibrary.org${singleValue}.json`
      const response = axios.get(url)
      response.then((result) => {
        return result
      })
      
    })
    console.log(bookDescription);



  } catch (error) {
    console.log('keyFunction function Error');
    console.log(error.name);
    console.log(error.message);
  }
} */