"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialTest_1 = __importDefault(require("../utils/initialTest"));
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(url, textValue, locator) {
        return _super.call(this, url, textValue, locator) || this;
    }
    LoginPage.prototype.visitUrl = function (url) { return this.visit(url); };
    LoginPage.prototype.fillFirstName = function (name, locator) {
        return this.fillText(name, locator);
    };
    LoginPage.prototype.fillPaswword = function (name, locator) {
        return this.fillText(name, locator);
    };
    LoginPage.prototype.submitLogin = function (buttonText) { return this.submit(buttonText); };
    return LoginPage;
}(initialTest_1.default));
exports.default = LoginPage;
