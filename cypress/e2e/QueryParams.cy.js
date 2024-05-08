describe("API Testing", () => {

    it("Passing Query Params", () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users",
            qs: {
                page: 1
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.status).equal(200)
            expect(response.body.data).has.length(6)
            expect(response.body).to.have.property('page', 1)
            expect(response.body.data[1]).to.has.property('id', 2)
            expect(response.body.data[1]).to.has.property('first_name', 'Janet')
            expect(response.body.data[1]).to.has.property('last_name', 'Weaver')
            expect(response.body.data[1]).to.has.property('avatar', 'https://reqres.in/img/faces/2-image.jpg')

        })
    })
})