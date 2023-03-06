
/// <reference types="cypress" />

describe("Nothing", ()=>{
    beforeEach(()=>{
        cy.visit("https://www.interact-lighting.com/en-us/customer-stories#page=1&filters=Possibility%2FCity%2CCountry%2FGermany%2C")
    })
        it("sample",()=>{
            
            cy.wait(3000)
            cy.get('#inp-Possibility').select("Retail").should('have.value','Retail')
        })
    })
