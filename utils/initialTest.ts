 class  initialTest{

  protected url?: string;
  protected textValue?:string;
  protected locator?:string;
  protected button?:string;

   constructor(url?:string,textValue?:string,locator?:string,button?:string) {
   this.url=url;
   this.textValue=textValue;
   this.locator=locator;
   this.button=button;
  }
  

    visit(url:string) {return cy.visit(url)}

    fillText(textValue:string,locator:Cypress.Chainable<JQuery<HTMLElement>>){
      locator.clear()
      locator.type(textValue)
      return this
    }

    submit(locator:Cypress.Chainable<JQuery<HTMLElement>>){ locator.click()}
      
     

}

export default  initialTest