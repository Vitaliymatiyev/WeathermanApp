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
    'Search Emptyfields': browser => {
        pageO
            .click('@SearchInput')
            .setValue('@SearchInput', BoundaryValues.dataObjectEmpty.dataObjectEmptyField)
            .click('@SubmitButton')
            .waitForElementVisible('@ErrorMessage', 2000)
            .verify.containsText('@ErrorMessage', 'There was a problem fetching the weather!')
            .click('@TryAgain')
        browser.pause(1000)    
    }
}    