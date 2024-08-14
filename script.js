document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '9de8bee440af62959c0ef38d89dba79f';  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            if (data.cod === 200) {
                const weatherInfo = 
                `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                weatherResult.innerHTML = weatherInfo;
            } else {
                weatherResult.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});
