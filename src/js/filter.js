let searchInput = document.querySelector('#inp')
let filter = document.querySelector('.regionFilter')
let regions = document.querySelectorAll('.regions')

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase()
    const countryItem = document.querySelectorAll(".country");
    const countryName = document.querySelectorAll(".countryName");
    countryName.forEach((title, i) => {
        if (title.textContent.toLowerCase().includes(searchValue)) {
            // console.log(title.textContent);
            countryItem[i].style.display = 'block'
        } else {
            countryItem[i].style.display = 'none'
        }
    })
})

import { createCountries } from "./updateUI";
import request from "./request"

regions.forEach(item => {
    item.addEventListener('click', () => {
        filter.textContent = item.textContent;

        let filterAPI;
        if (item.textContent == "All...") {
            filterAPI = "https://restcountries.com/v3.1/all"
        } else {
            filterAPI = `https://restcountries.com/v3.1/region/${item.textContent.toLowerCase()}`
        }

        request(filterAPI).then((data) => {
            createCountries(data)
            const countryItem = document.querySelectorAll(".country");
            // console.log(countryItem.length);
            filter.textContent += ` (${countryItem.length})`
        }).catch((err) => {
            alert(err.message)
        })
    })
})