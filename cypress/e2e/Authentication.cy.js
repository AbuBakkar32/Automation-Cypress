describe('Authentication', () => {

    // it('Basic Auth', () => {
    //     cy.request({
    //         method: 'GET',
    //         url: 'https://the-internet.herokuapp.com/basic_auth',
    //         auth: {
    //             username: 'admin',
    //             password: 'admin'
    //         }
    //     })
    //         .then((response) => {
    //             expect(response.status).to.eq(200)
    //         })
    // })
    //
    // const token = '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'
    // it("Bearer Token Auth", () => {
    //     cy.request({
    //         method: 'GET',
    //         url: 'https://api.github.com/user/repos',
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200)
    //     })
    // })

    it("API key auth", () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=London',
            qs:{
                appid : '0a43e2d7eaec35f984b2fd283aeb3443'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})