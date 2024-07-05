const counteryInput = document.getElementById('counteryInput'),
search = document.getElementById('search'),
search_result = document.getElementById('search_result'),
flag = document.getElementById('flag'),
name = document.getElementById('name'),
capital = document.getElementById('capital'),
continent = document.getElementById('continent'),
population = document.getElementById('population'),
currency = document.getElementById('currency'),
currencyShort = document.getElementById('currencyShort'),
language = document.getElementById('language');

search.addEventListener('click', ()=>{

    let countryName = counteryInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) =>{
        search_result.style.display = 'block';

        countryData = data[0]
        console.log(countryData)
        flag.src = countryData.flags.svg;
        name.innerHTML = countryData.name.common
        capital.innerHTML = countryData.capital
        continent.innerHTML = countryData.continent
        population.innerHTML = countryData.population
        currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name
        currencyShort.innerHTML = Object.keys(countryData.currencies)[0]
        language.innerHTML = Object.values(countryData.languages).toString().split(',').join(',')
        
        
    })
})
