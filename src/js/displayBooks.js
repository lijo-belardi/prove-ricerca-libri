import { getBookTitle } from "./getBookElements";

export const displayBookTitle = async (title) => {
    let html = ''
    title.forEach(single => {
      html += `
          <div class="info-book">
          <h2>${single}</h2>
          <p>Description: </p>
          </div>`
      let bookTitleList = document.getElementById('book-list')
      bookTitleList.innerHTML = html
    });
  }