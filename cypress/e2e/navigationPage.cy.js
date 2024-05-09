const {navigateTo} = require('../support/page_objects/navigation_page')

describe('Navigation test', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Navigation to forms', () => {
        navigateTo.formLayoutPage()
        navigateTo.datePickerPage()
        navigateTo.toasterPage()
        navigateTo.smartTablePage()
        navigateTo.toolTipPage()
    })

})