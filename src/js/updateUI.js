let mbDiv = document.querySelector('.main__bottom')

export const createCountries = (countries) => {
    let counter = 0
    mbDiv.innerHTML = ``

    countries.forEach(country => {
        counter++;
        const commonName = country.name.common;
        const population = country.population;
        const region = country.region;
        const capital = country.capital ? country.capital : "No Capital";
        const flag = country.flags.svg;
        mbDiv.innerHTML += `
            <div class="country">
                <a class="country__img" href="./about.html?country=${commonName}"><img src="${flag}"></a>

                <div class="country__info">
                    <h2 class="countryName" >${commonName}</h2>
                    <p><b>Population: </b> ${population.toLocaleString("En-US") }</p>
                    <p><b>Region: </b> ${region}</p>
                    <p><b>Capital: </b> ${capital}</p>
                </div>
            </div>
        `
    });
}

const adiv = document.querySelector('.adiv')
import request from "./request";

export const createCountryInfo = (country) => {
    const { population, borders, capital, flags, name, region, tld, languages, currencies } = country
    const nativeName = Object.values(name.nativeName)[0].official ? Object.values(name.nativeName)[0].official : "No native name";
    const currency = Object.values(currencies)[0].name ? Object.values(currencies)[0].name : "No currency";
    const language = Object.values(languages) ? Object.values(languages) : "No native language"
    const subregion = country.subregion ? country.subregion : "No subregion"
    adiv.innerHTML = ''
    adiv.innerHTML = `
    <div class="adiv__img">
        <img src=${flags.svg}>
    </div>

    <div class="info">
    
        <h2>${name.common}</h2>
    
        <div class="info__text">
    
            <div class="info__text-left">
                <p><b>Native Name: </b>${nativeName}</p>
                <p><b>Population: </b>${population.toLocaleString("En-US") }</p>
                <p><b>Region: </b>${region}</p>
                <p><b>Sub Region: </b>${subregion}</p>
                <p><b>Capital: </b>${capital}</p>
            </div>
    
            <div class="info__text-right">
                <p><b>Top Level Domain: </b>${tld}</p>
                <p><b>Currencies: </b>${currency}</p>
                <p><b>Languages: </b>${language}</p>
            </div>
        </div>
    
        <div class="borders">
            <h4><b>Border Countries: </b></h4>
            <div class="borders__names">
               
            </div>
        </div>
    
    </div>
    `
    const borderCountries = document.querySelector(".borders__names");

    if (borders) {
        console.log(borders);

        borders.forEach(item => {
            const codeAPi = `https://restcountries.com/v3.1/alpha/${item}`
            request(codeAPi).then((data) => {
                const nameCy = data[0].name.common
                borderCountries.innerHTML += ` 
            <a href="./about.html?country=${nameCy}">
                <p><b>${nameCy}</b></p>
            </a>`
            }).catch((err) => {
                console.log(err);
            })
        })
    } else {
        borderCountries.innerHTML = ` 
        <a>
            <p><b>No borders</b></p>
        </a>`
    }



}