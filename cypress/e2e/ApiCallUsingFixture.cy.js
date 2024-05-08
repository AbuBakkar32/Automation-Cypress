describe("API Call UsingFixture", () => {
    it("POST request using Fixture", () => {
        cy.fixture("restData").then((data) => {
            cy.request({
                method: "POST",
                url: "https://jsonplaceholder.typicode.com/posts",
                body: data[0]
            }).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).has.property('userId', data.userId)

                expect(response.body).to.have.property('title')
                expect(response.body).has.property('title', data.title)

                expect(response.body).to.have.property('body')
                expect(response.body).has.property('body', data.body)

                expect(response.body.title).to.eq(data.title)
                expect(response.body.body).to.eq(data.body)
            })
        })
    })
})