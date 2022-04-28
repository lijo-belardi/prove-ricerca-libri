import { log, modal } from "./utility"

export const getBookDescription = (description) => {
    //variables
    const bookDetailsContent = document.querySelector(".book-details-content");
    const descriptionSection = document.querySelector(".book-description")
    // modal function
    modal()
    //add to Html
    let html = `
    <div class = "book-instruct">
        <h3>Description</h3>
        <p></p>
    </div>`
    bookDetailsContent.innerHTML = html
    //eventListener
}

//${description.value != null ? description.value : description}