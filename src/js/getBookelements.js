import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray, result } from "lodash";
import { log, logErrors } from "./utility";
import { displayBook } from "./displayBook";
import { descriptionApiRequest } from "./ApiRequests"

export const getBookElements = async (books) => {
    try {
        const bookElements = books.map((book) => {
            let title = get(book, "title", "Title Unknown")
            let key = get(book, 'key', 'Key Unknown')
            let authors = get(book, 'authors', 'Authors Unknown')
            if (Array.isArray(authors)) {
                authors.length <= 4
                    ? authors = authors.map((author) => { return author.name; }).join(", ")
                    : authors = `${authors[0].name}, ${authors[1].name}, 
                                 ${authors[2].name}, ${authors[3].name} and others`
            }
            return { title, key, authors }
        })
        descriptionApiRequest(bookElements)
        displayBook(bookElements)
    } catch (error) {
        log('ERROR: bookElements function')
        logErrors(error)
    }
}


