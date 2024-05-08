const xml2js = require('xml2js')
const parser = new xml2js.Parser({explicitArray: false})

describe('Parsing XML Response', () => {
    let petId = null;
    const xmlPayload =
        `<Pet>
            <id>0</id>
            <Category>
                <id>0</id>
                <name>Dog</name>
            </Category>
            <name>Jimmy</name>
            <photoUrls>
                <photoUrl>string</photoUrl>
            </photoUrls>
            <tags>
                <Tag>
                    <id>0</id>
                    <name>string</name>
                </Tag>
            </tags>
            <status>available</status>
        </Pet>`

    before('Parsing XML Response to JSON', () => {
        cy.request(
            {
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/pet',
                body: xmlPayload,
                headers: {
                    'Content-Type': 'application/xml',
                    'accept': 'application/xml'
                },
            })
            .then((response) => {
                expect(response.status).to.eq(200)
                parser.parseString(response.body, (err, result) => {
                    petId = result.Pet.id
                    cy.log(petId)
                })
            })
    })

    it('Get Pet by ID', () => {
        cy.request(
            {
                method: 'GET',
                url: `https://petstore.swagger.io/v2/pet/${petId}`,
                headers: {
                    'accept': 'application/xml'
                },
            })
            .then((response) => {
                expect(response.status).to.eq(200)
                parser.parseString(response.body, (err, result) => {
                    expect(result.Pet.id).to.eq(petId)
                    expect(result.Pet.name).to.eq('Jimmy')
                    expect(result.Pet.status).to.eq('available')
                })
            })
    })
})