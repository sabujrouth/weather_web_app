const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dda377b487mshd01aadc0870ef45p193a9bjsn8da167e076d3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));