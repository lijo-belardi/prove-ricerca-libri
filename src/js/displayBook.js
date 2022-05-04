import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { log, logErrors } from "./utility";


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

              <!-- Button trigger modal -->
              <button type="button" class="description-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Read Description
              </button>

              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Description</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div> <!-- Modal -->
          </div> <!-- Main div -->`;
    });
    bookList.innerHTML = html

  } catch (error) {
    log('ERROR: displayBooks function')
    logErrors(error)
  }
}
