"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="cypress" />
var login_page_1 = __importDefault(require("../pages/login-page"));
describe("A suite is just a function", function () {
    var a;
    it("and so is a spec", function () {
        a = true;
        expect(a).to.equal(true);
    });
});
describe("Login Test example", function () {
    it("enter saucedemo with standard_user", function () {
        var lp = new login_page_1.default();
        lp.visitUrl("https://www.saucedemo.com/");
        lp.fillFirstName("standard_user", "#user-name");
        lp.fillPaswword("secret_sauce", "#password");
        lp.submit("#login-button");
    });
    it("verify url", function () {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    });
});
