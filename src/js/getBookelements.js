import axios from "axios";
import "@babel/runtime/regenerator";
import { async } from "@babel/runtime/regenerator";
import { get, isArray, result } from "lodash";
import { log, logErrors } from "./utility";
import { displayBook } from "./displayBook";

export const getbookElements = async (books) => {
    try {
        const bookElements = books.map((book) => {
            let title = get(book, "title", "Title Unknown")
            let key =  get(book, 'key', 'Key Unknown')
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


export const descriptionApiRequest = async (bookElements) => {
    try {
        const getDescription = bookElements.forEach(async (element) => {
            const url = `https://openlibrary.org${element.key}.json`
            const response = await axios.get(url)
            const description = get(response.data, 'description', 'No description for this book')
            description.value != null ? log(description.value) : log(description)
            
        });

    } catch (error) {
        log('ERROR: descriptionApiRequest function')
        logErrors(error)
    }
}