/// <reference types="cypress" />


beforeEach(() => {
    cy.log('I run before every test in every spec file!!!!!!');
  })

describe('Navigate to Google Test', function () {
    it('Visits in google', function () {
        cy.visit('https://www.google.com');
    });
});


describe("A suite is just a function", function() {
     let  a : Boolean;  
    it("and so is a spec", function() {
      a = true;
     expect(a).to.equal(true);
    });
  });

  describe('Verify Browser Stack Home Page', () => {

    it('Verify Browserstack logo is visible', () => {

        cy.visit('https://www.browserstack.com/');

        cy.get('#logo').should('be.visible');

    })

    it('Verify Header is present', () => {

        cy.get('h1').first().should('be.exist');

    })

    it('Verify Product menu are present', () => {

        cy.get('#product-menu-toggle').first().should('be.exist');

        cy.get('#developers-menu-toggle').first().should('be.exist');

        cy.get('#developers-menu-toggle').first().should('be.exist');

    })

    it('Verify menu Links are  present', () => {

        cy.get("a[title='Pricing']").first().should('be.exist');

        cy.get("a[title='Sign In']").first().should('be.exist');

        cy.get("a[title='Live for Teams']").first().should('be.exist');

    })

});