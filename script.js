document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '4d2265c2ooezccdoc4bd33ehec8c7564';
    const searchButton = document.getElementById('search-button');
    const locationInput = document.getElementById('location');
    const cityName = document.getElementById('city-name');
    const date = document.getElementById('date');
    const temperature = document.getElementById('temperature');
    const weatherCondition = document.getElementById('weather-condition');
    const loader = document.querySelector('.loader');

    searchButton.addEventListener('click', function () {
        const city = locationInput.value;

        if (city) {
            loader.style.display = 'block';
            getWeather(city);
        }
    });

    async function getWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            loader.style.display = 'none';

            cityName.textContent = data.name;
            date.textContent = new Date().toLocaleDateString();
            temperature.textContent = `${data.main.temp}°C`;
            weatherCondition.textContent = data.weather[0].description;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            loader.style.display = 'none';
            cityName.textContent = 'City not found';
            date.textContent = '';
            temperature.textContent = '';
            weatherCondition.textContent = '';
        }
    }
});
