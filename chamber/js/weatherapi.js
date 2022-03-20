const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5586437&appid=a6b84b3a6ae6e7690e1af8fd1626258f&units=imperial";
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = jsObject.main.temp;
        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
    });