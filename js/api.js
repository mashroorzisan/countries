const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => getFunction(data))
};

const getFunction = (countries) => {
    const countrySection = document.getElementById('countries-section');
    countries.forEach(country => {
        // console.log(country.name.common)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('style-country');
        countryDiv.innerHTML = `
        <h1>Name: ${country.name.common} </h1>
        <button>details</button>
        `
        countrySection.appendChild(countryDiv);
    });
};