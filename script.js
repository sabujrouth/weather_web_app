const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dda377b487mshd01aadc0870ef45p193a9bjsn8da167e076d3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        cloud_pct = response.cloud_pct
        temp = response.temp
        feels_like = response.feels_like
        humidity = response.humidity
        min_temp = response.min_temp
        max_temp = response.max_temp
        wind_speed = response.wind_speed
        wind_degrees = response.wind_degrees
        sunrise = response.sunrise
        sunset = response.sunset

    })
    .catch(err => console.error(err));