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
  const lp=new LoginPage();
   it("enter saucedemo with standard_user", ()=> {
    lp.visitUrl("https://www.saucedemo.com/");
    lp.fillFirstName("standard_user");
    lp.fillPaswword("secret_sauce");
    lp.submitLogin();
 })
   it("verify url", ()=> {
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
   })
   it("verify 6 items", ()=> {
   let sumProdact : number = 6 
   lp.getItemsLength().should('eq', sumProdact)
   })
 });

 