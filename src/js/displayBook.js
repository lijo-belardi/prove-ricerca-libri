import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray, result } from "lodash";
import { getBook } from "./ApiRequests";
import { log, logErrors, modal } from "./utility";



export const displayBook = async (book) => {
  try {
    let html = ''
    const bookList = document.getElementById('book-list')
    book.forEach(element => {
      html += `
          <div class="book" data-id = "${element.key}">
              <div class="book-title">
                <h2>${element.title}</h2>
                <h3>${element.key}</h3>
              </div>

              <div class="book-authors">
                <h4>Authors: ${element.authors}</h4>
              </div>

              <button class="description-button">Read Description</button>
          </div>`;
    });
    bookList.innerHTML = html

  } catch (error) {
    log('ERROR: displayBooks function')
    logErrors(error)
  }
}





/* export const keyFunction = async (key) => {
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
}  */
