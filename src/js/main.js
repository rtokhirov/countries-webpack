import '../main.min.css'
import request from './request';
import { createCountries } from './updateUI';
import './filter'
import './mode'

let select = document.querySelector('.main__top-select')
let options = document.querySelector('.options')


let API = "https://restcountries.com/v3.1/all";
request(API).then((data) => {
    createCountries(data);
}).catch((err) => {
    alert(err);
})

let df = true
select.addEventListener('click', () => {
    if (df) {
        options.style.display = "block"
        df = false
    } else {
        options.style.display = "none"
        df = true
    }
})