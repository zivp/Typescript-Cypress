 class  initialTest{

  protected url?: string;
  protected textValue?:string;
  protected locator?:string;
  protected buttonText?:string;

   constructor(url?:string,textValue?:string,locator?:string,buttonText?:string) {
   this.url=url;
   this.textValue=textValue;
   this.locator=locator;
   this.buttonText=buttonText;
  }
  

    visit(url:string) {return cy.visit(url)}

    fillText(textValue:string,locator:string){
      const field=cy.get(locator)
      field.clear()
      field.type(textValue)
      return this
    }

    submit(locator:string,buttonText?:string){
      if(typeof buttonText ==="string")
      {
      const button= cy.contains(buttonText)
      button.click()
      }
      else{const button= cy.get(locator).click()}
      
     }

}

export default  initialTest