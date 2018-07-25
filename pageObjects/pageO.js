module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    elements: {
        WeatherTitle : 'h1[class="app__title"]',
        SearchInput : 'input[class="enter-location__input"]',
        SubmitButton : 'button[class="enter-location__submit"]',
        WeathermanCard : 'div[class="current-weather__weather"]',
        CityNameCard : 'h3[class="current-weather__location"]',
        WeatherIcon : 'img[class="current-weather__icon"]',
        CurrentTemp : 'h3[class="current-weather__temp"]',
        MaxTemp : 'li[name="maxTemp"]',
        MinTemp : 'li[name="minTemp"]',
        WindMph : 'li[name="wind"]',
        HumidityWeather : 'li[name="humidity"]',
        SearchAgain : 'button[class="current-weather__search-again"]',
        ErrorMessage : 'h3[class="error-message__message"]',
        TryAgain : 'button[class="error-message__try-again"]',
    }

}