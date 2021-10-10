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
    function LoginPage() {
        var _this = _super.call(this) || this;
        //declare locators of login page 
        _this.UserName = function () { return cy.get("#user-name"); };
        _this.PasswordUser = function () { return cy.get("#password"); };
        _this.SubmitButton = function () { return cy.get("#login-button"); };
        _this.getItemsLength = function () { return cy.get("#inventory_container>div>div.inventory_item").its('length'); };
        return _this;
    }
    //pom functions
    LoginPage.prototype.visitUrl = function (url) { return this.visit(url); };
    ;
    LoginPage.prototype.fillFirstName = function (name) { return this.fillText(name, this.UserName()); };
    ;
    LoginPage.prototype.fillPaswword = function (password) { return this.fillText(password, this.PasswordUser()); };
    ;
    LoginPage.prototype.submitLogin = function () { return this.submit(this.SubmitButton()); };
    ;
    return LoginPage;
}(initialTest_1.default));
exports.default = LoginPage;
