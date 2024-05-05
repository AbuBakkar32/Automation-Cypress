describe('My First Test', () => {
  before(() => {
    cy.fixture('example').then((data) => {
      console.log(data)
    })
  })


  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('prev').click()
  })
})
//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