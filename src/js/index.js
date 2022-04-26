import '../style/main.scss'; // connect scss to template.html
import { getBooksByGenres } from './ApiRequests'
import { check } from './displayBook';
import { async } from '@babel/runtime/regenerator';
import { log, logErrors, refreshFunction, submitFunction } from './utility';

const form = document.getElementById('form')
const refreshButton = document.getElementById('refresh-button')

// submit
form.addEventListener('submit', submitFunction)
// Refresh button
refreshButton.addEventListener('click', refreshFunction)