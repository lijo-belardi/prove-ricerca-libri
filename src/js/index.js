import '../style/main.scss'; // connect scss to template.html
import { getBooksByGenres } from './ApiRequests'
import { check } from './displayBook';
import { async } from '@babel/runtime/regenerator';
import { log, logErrors } from './utility';

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // set variables
    const formErrorMessage = document.getElementById('error-message')
    const subject = e.target.querySelector('#search-input')
    const searchItem = subject.value.toLowerCase()

    // searchItem conditions
    let messages = []
    if (subject.value === '' || subject.value == null) {
        messages.push('Subject is required!')
    }
    if (messages.length > 0) { formErrorMessage.innerText = messages.join(', ') }

    //function invocation
    getBooksByGenres(searchItem)
})
