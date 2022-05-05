import '../style/main.scss'; // connect scss to template.html
import { async } from '@babel/runtime/regenerator';
import { refreshFunction, submitFunction } from './utility';

const form = document.getElementById('form')
const refreshButton = document.getElementById('refresh-button')


form.addEventListener('submit', submitFunction) // Submit
refreshButton.addEventListener('click', refreshFunction) // Refresh button