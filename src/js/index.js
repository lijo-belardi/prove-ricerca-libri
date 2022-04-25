import '../style/main.scss'; // connect scss to template.html
import { getBooksByGenres } from './ApiRequests'
import { check } from './displayBook';
import { async } from '@babel/runtime/regenerator';
import { log, logErrors } from './utility';

const form = document.getElementById('form')
const subject = document.getElementById('search-input')
const errorElement = document.getElementById('error-message')

try {
    getBooksByGenres('fantasy')
} catch (error) {
    log('ERROR: generic try-catch')
    logErrors(error)
}



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
        getBooksByGender(searchItem)
    } catch (error) {
        log('ERROR: event Listener')
        logErrors(error)
    }
}) */
