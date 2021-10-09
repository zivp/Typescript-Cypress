"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initialTest = /** @class */ (function () {
    function initialTest(url, textValue, locator, buttonText) {
        this.url = url;
        this.textValue = textValue;
        this.locator = locator;
        this.buttonText = buttonText;
    }
    initialTest.prototype.visit = function (url) { return cy.visit(url); };
    initialTest.prototype.fillText = function (textValue, locator) {
        var field = cy.get(locator);
        field.clear();
        field.type(textValue);
        return this;
    };
    initialTest.prototype.submit = function (locator, buttonText) {
        if (typeof buttonText === "string") {
            var button = cy.contains(buttonText);
            button.click();
        }
        else {
            var button = cy.get(locator).click();
        }
    };
    return initialTest;
}());
exports.default = initialTest;
