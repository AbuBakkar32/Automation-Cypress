describe("HTTP Request", () => {
    it("GET Call", () => {
        cy.request("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('title')
            expect(response.body).to.have.property('body')
        })
    })

    it("POST Call", () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body: {
                title: "foo",
                body: "bar",
                userId: 1
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
        })
    })

    it("PULL Call", () => {
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.typicode.com/posts/1",
            body: {
                id: 1,
                title: "foo",
                body: "bar",
                userId: 1
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')
        })
    })

    it("DELETE Call", () => {
        cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts/1"
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it("GET Call with Headers", () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1",
            headers: {
                "content-type": "application/json"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('title')
            expect(response.body).to.have.property('body')
        })
    })

    it("GET Call with Query Params", () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            qs: {
                userId: 1
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('title')
            expect(response.body[0]).to.have.property('body')
        })
    })
})