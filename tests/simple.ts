/// <reference types="cypress" />

describe('Navigate to Google Test', function () {
    it('Visits in google', function () {
        cy.visit('https://www.google.com');
    });
});
