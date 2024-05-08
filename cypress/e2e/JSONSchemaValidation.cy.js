const Ajv = require("ajv");
const ajv = new Ajv();
describe("JSON Schema Validation", () => {
    it("Json Schema validation against the response", () => {
        cy.request({
            method: "GET",
            url: "https://fakestoreapi.com/products"
        })
            .then((response) => {
                //schema goes here
                const schema = {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            title: { type: "string" },
                            price: { type: "number" },
                            rating: {
                                type: "object",
                                properties: {
                                    rate: { type: "number" },
                                    count: { type: "number" }
                                },
                                required: ["rate", "count"]
                            },
                            category: { type: "string" },
                            description: { type: "string" },
                            image: { type: "string" }
                        },
                        required: ["id", "title", "price", "rating", "category", "description", "image"]
                    }
                }// schema ends here

                const validate = ajv.compile(schema)
                const valid = validate(response.body)
                expect(valid).to.be.true

            })
    })
})