"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initialTest = /** @class */ (function () {
    function initialTest(url, textValue, locator, button) {
        this.url = url;
        this.textValue = textValue;
        this.locator = locator;
        this.button = button;
    }
    initialTest.prototype.visit = function (url) { return cy.visit(url); };
    initialTest.prototype.fillText = function (textValue, locator) {
        locator.clear();
        locator.type(textValue);
        return this;
    };
    initialTest.prototype.submit = function (locator) { locator.click(); };
    return initialTest;
}());
exports.default = initialTest;
