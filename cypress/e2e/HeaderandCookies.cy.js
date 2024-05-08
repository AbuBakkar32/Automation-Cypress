describe('API Testing', () => {
    let authToken = null;

    before("Get Auth Token", () => {
        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/api-clients/",
            headers: {
                "content-type": "application/json"
            },
            body: {
                clientName: "Cypress",
                clientEmail: Math.random().toString(6).substring(3) + "@gmail.com"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            authToken = response.body.accessToken;
        })
    })

    before("Creating New Order", () => {
        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/orders/",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            body: {
                bookId: 1,
                customerName: "Abu Bakkar Siddikk"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.created).to.eq(true)
        })
    })

    it("GET Call", () => {
        cy.log(authToken)
        cy.request({
            method: "GET",
            url: "https://simple-books-api.glitch.me/orders/",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${authToken}`
            }
        }).then((response) => {
            console.log(response.body)
            expect(response.status).to.eq(200)
        })
    })

})