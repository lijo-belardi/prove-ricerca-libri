import '../style/main.scss'; // connect scss to template.html
import { getBook } from './getBookList'
import { check } from './getBookElements';
import { async } from '@babel/runtime/regenerator';

const form = document.getElementById('form')
const subject = document.getElementById('search-input')
const errorElement = document.getElementById('error-message')


/* form.addEventListener('submit', (e) => {
    try {
        let messages = []
        if (subject.value === '' || subject.value == null) {
            messages.push('Subject is required!')
        }
        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
        }
        const input = e.target.querySelector('#search-input')
        const searchItem = input.value.trim()
        getBook(searchItem)

    } catch (error) {
        console.log('Event Listener Error');
        console.log(error);
    }
}) */
