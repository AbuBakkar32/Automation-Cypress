describe('Parsing JSON Response', () => {
    it("Parsing JSON Response", () => {
        cy.request({
            method: "GET",
            url: "https://fakestoreapi.com/products"
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body[0].id).to.eq(1)
                expect(response.body[0].title).to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
                expect(response.body[0].price).to.eq(109.95)
                expect(response.body[0].rating.rate).to.eq(3.9)
                expect(response.body[0].rating.count).to.eq(120)

                response.body.forEach((item) => {
                    expect(item).to.have.property('id')
                    expect(item).to.have.property('title')
                    expect(item).to.have.property('price')
                    expect(item).to.have.property('category')
                    expect(item).to.have.property('description')
                    expect(item).to.have.property('image')
                })
            })
    })
})