/// <reference types="cypress" />
import LoginPage from '../pages/login-page';




describe("A suite is just a function", function() {
     let  a : Boolean;  
    it("and so is a spec", function() {
      a = true;
     expect(a).to.equal(true);
    });
  });

  
  
describe("Login Test example", ()=> { 
   it("enter saucedemo with standard_user", ()=> {
    const lp=new LoginPage();
    lp.visitUrl("https://www.saucedemo.com/");
    lp.fillFirstName("standard_user","#user-name");
    lp.fillPaswword("secret_sauce","#password");
    lp.submit("#login-button");
   // cy.title().should('be.equal','Zero - Log in')
   });
 });

 