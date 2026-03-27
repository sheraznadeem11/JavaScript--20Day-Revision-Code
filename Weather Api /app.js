const API_KEY = "2a268144c2ff2aa365d8240f0637dd9f";

const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const errorDiv = document.querySelector("#error");
const weatherInfoDiv = document.querySelector("#weatherInfo");
const cityName = document.querySelector("#cityName");
const condition = document.querySelector("#condition");
const temperature = document.querySelector("#termerature");
const windSpeed = document.querySelector("#windSpeed");
const humidity = document.querySelector("#humidity");

// ✅ FIXED
searchBtn.addEventListener("click", fetchWeather);

async function fetchWeather() {
    const city = cityInput.value.trim();

    if (!city) {
        displayError("Please Enter city name");
        return;
    }

    // ✅ FIXED URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not Found");
        }

        const data = await response.json();

        // ✅ FIXED function name
        displayWeather(data);

    } catch (error) {
        displayError("Incorrect City Name");
    }
}

function displayError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
    weatherInfoDiv.classList.add("hidden");
}

// ✅ FIXED NAME
function displayWeather(data) {
    errorDiv.style.display = "none";
    weatherInfoDiv.classList.remove("hidden");

    cityName.textContent = data.name;

    const weatherCondition =
        data.weather[0].description.charAt(0).toUpperCase() +
        data.weather[0].description.slice(1);

    condition.innerHTML = `<i class="fa-regular fa-cloud"></i> ${weatherCondition}`;
    temperature.textContent = data.main.temp;
    windSpeed.textContent = data.wind.speed;
    humidity.textContent = data.main.humidity;
}