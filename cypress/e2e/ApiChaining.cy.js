describe('API Chaining', () => {
    it("Should make API requests and chain them together", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        }).then((response) => {
            expect(response.status).to.eq(200)
            return response.body.userId
        }).then((userId) => {
            cy.request({
                method: 'GET',
                url: `https://jsonplaceholder.typicode.com/users/${userId}`
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.id).to.eq(1)
                expect(response.body.name).to.eq('Leanne Graham')
                expect(response.body.username).to.eq('Bret')
            })
        })
    })
})