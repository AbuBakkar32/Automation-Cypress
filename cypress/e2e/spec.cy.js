describe('Cypress Apps Testing', () => {
    it('finds the content "type"', () => {
        cy.visit('https://example.cypress.io')
        //To find this element by its contents, we'll use cy.contains().
        cy.contains('type').click()
        // Should be on a new URL which
        cy.url().should('include', '/commands/actions')


        // // Get an input, type into it
        cy.get('.action-email').type('fake@email.com')
        cy.get('.action-email').should('have.value', 'fake@email.com')


        cy.get('.action-focus').focus()
        cy.get('.action-focus').should('have.class', 'focus')
            .prev().should('have.attr', 'style', 'color: orange;')

        cy.get('.action-blur').type('About to blur')
        cy.get('.action-blur').blur()
        cy.get('.action-blur').should('have.class', 'error')
            .prev().should('have.attr', 'style', 'color: red;')

        cy.get('.action-clear').type('Clear this text')
        cy.get('.action-clear').should('have.value', 'Clear this text')
        cy.get('.action-clear').clear()
        cy.get('.action-clear').should('have.value', '')

        cy.get('.action-form')
            .find('[type="text"]').type('Abu Bakkar Siddikk')

        cy.get('.action-form').submit()
        cy.get('.action-form').next().should('contain', 'Your form has been submitted!')

        cy.get('.action-btn').click()
        // clicking in the center of the element is the default
        cy.get('#action-canvas').click()

        cy.get('#action-canvas').click('topLeft')
        cy.get('#action-canvas').click('top')
        cy.get('#action-canvas').click('topRight')
        cy.get('#action-canvas').click('left')
        cy.get('#action-canvas').click('right')
        cy.get('#action-canvas').click('bottomLeft')
        cy.get('#action-canvas').click('bottom')
        cy.get('#action-canvas').click('bottomRight')

        cy.get('#action-canvas')
        cy.get('#action-canvas').click(80, 75) // click 80px on x coord and 75px on y coord
        cy.get('#action-canvas').click(170, 75)
        cy.get('#action-canvas').click(80, 165)
        cy.get('#action-canvas').click(100, 185)
        cy.get('#action-canvas').click(125, 190)
        cy.get('#action-canvas').click(150, 185)
        cy.get('#action-canvas').click(170, 165)

        // click multiple elements by passing multiple: true
        cy.get('.action-labels>.label').click({multiple: true})

        // Ignore error checking prior to clicking
        cy.get('.action-opacity>.btn').click({force: true})

        cy.get('.action-div').dblclick()
        cy.get('.action-div').should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')

        cy.get('.rightclick-action-div').rightclick()
        cy.get('.rightclick-action-div').should('not.be.visible')
        cy.get('.rightclick-action-input-hidden').should('be.visible')

        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check()
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked')

        cy.get('.action-radios [type="radio"]').not('[disabled]').check()
        cy.get('.action-radios [type="radio"]').not('[disabled]').should('be.checked')

        // .check() accepts a value argument
        cy.get('.action-radios [type="radio"]').check('radio1')
        cy.get('.action-radios [type="radio"]').should('be.checked')

        // .check() accepts an array of values
        cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2'])
        cy.get('.action-multiple-checkboxes [type="checkbox"]').should('be.checked')

        // Ignore error checking prior to checking
        cy.get('.action-checkboxes [disabled]').check({force: true})
        cy.get('.action-checkboxes [disabled]').should('be.checked')

        cy.get('.action-radios [type="radio"]').check('radio3', {force: true})
        cy.get('.action-radios [type="radio"]').should('be.checked')

        cy.get('.action-check [type="checkbox"]')
            .not('[disabled]')
            .uncheck()
        cy.get('.action-check [type="checkbox"]')
            .not('[disabled]')
            .should('not.be.checked')

        // .uncheck() accepts a value argument
        cy.get('.action-check [type="checkbox"]')
            .check('checkbox1')
        cy.get('.action-check [type="checkbox"]')
            .uncheck('checkbox1')
        cy.get('.action-check [type="checkbox"][value="checkbox1"]')
            .should('not.be.checked')

        // .uncheck() accepts a value argument
        cy.get('.action-check [type="checkbox"]')
            .check('checkbox1')
        cy.get('.action-check [type="checkbox"]')
            .uncheck('checkbox1')
        cy.get('.action-check [type="checkbox"][value="checkbox1"]')
            .should('not.be.checked')

        cy.get('.action-check [type="checkbox"]')
            .check(['checkbox1', 'checkbox3'])
        cy.get('.action-check [type="checkbox"]')
            .uncheck(['checkbox1', 'checkbox3'])
        cy.get('.action-check [type="checkbox"][value="checkbox1"]')
            .should('not.be.checked')
        cy.get('.action-check [type="checkbox"][value="checkbox3"]')
            .should('not.be.checked')

        // Ignore error checking prior to unchecking
        cy.get('.action-check [disabled]').uncheck({force: true})
        cy.get('.action-check [disabled]').should('not.be.checked')

        cy.get('#scroll-horizontal button')
            .should('not.be.visible')

        // scroll the button into view, as if the user had scrolled
        cy.get('#scroll-horizontal button').scrollIntoView()
        cy.get('#scroll-horizontal button')
            .should('be.visible')

        cy.get('#scroll-vertical button')
            .should('not.be.visible')

        // Cypress handles the scroll direction needed
        cy.get('#scroll-vertical button').scrollIntoView()
        cy.get('#scroll-vertical button')
            .should('be.visible')

        cy.get('#scroll-both button')
            .should('not.be.visible')

        // Cypress knows to scroll to the right and down
        cy.get('#scroll-both button').scrollIntoView()
        cy.get('#scroll-both button')
            .should('be.visible')

        //set timer to wait 2 seconds
        cy.wait(2000)
    })
    it('triger input range', () => {
        cy.get('.trigger-input-range')
            .invoke('val', 25)
        cy.get('.trigger-input-range')
            .trigger('change')
        cy.get('.trigger-input-range')
            .get('input[type=range]').siblings('p')
            .should('have.text', '25')
    })
})

