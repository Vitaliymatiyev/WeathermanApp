const BoundaryValues = require('../resources/data')
let pageO = {}
module.exports = {
    before: browser => {
        pageO = browser.page.pageO()
        pageO.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Verify NameTitle': () => {
        pageO
            .verify.containsText('@WeatherTitle', 'WEATHERMAN')
    },
    'ZipCode Search': () => {
        pageO
            .click('@SearchInput')
            .setValue('@SearchInput', BoundaryValues.dataObjectValid.dataObjectValidZip)
            .click('@SubmitButton')
            .waitForElementVisible('@CityNameCard', 2000)
            .verify.containsText('@CityNameCard', 'New York')
            .click('@SearchAgain')
    },
    'CityName Search': browser => {
        pageO
            .click('@SearchInput')
            .setValue('@SearchInput', BoundaryValues.dataObjectValid.dataObjectValidName)
            .click('@SubmitButton')
            .waitForElementVisible('@CityNameCard', 2000)
            .verify.containsText('@CityNameCard', 'New York')
            .click('@SearchAgain')
        browser.pause(1000)

    }


}
