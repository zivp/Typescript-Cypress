"use strict";
/// <reference types="cypress" />
beforeEach(function () {
    cy.log('I run before every test in every spec file!!!!!!');
});
describe('Navigate to Google Test', function () {
    it('Visits in google', function () {
        cy.visit('https://www.google.com');
    });
});
describe("A suite is just a function", function () {
    var a;
    it("and so is a spec", function () {
        a = true;
        expect(a).to.equal(true);
    });
});
describe('Verify Browser Stack Home Page', function () {
    it('Verify Browserstack logo is visible', function () {
        cy.visit('https://www.browserstack.com/');
        cy.get('#logo').should('be.visible');
    });
    it('Verify Header is present', function () {
        cy.get('h1').first().should('be.exist');
    });
    it('Verify Product menu are present', function () {
        cy.get('#product-menu-toggle').first().should('be.exist');
        cy.get('#developers-menu-toggle').first().should('be.exist');
        cy.get('#developers-menu-toggle').first().should('be.exist');
    });
    it('Verify menu Links are  present', function () {
        cy.get("a[title='Pricing']").first().should('be.exist');
        cy.get("a[title='Sign In']").first().should('be.exist');
        cy.get("a[title='Live for Teams']").first().should('be.exist');
    });
});
