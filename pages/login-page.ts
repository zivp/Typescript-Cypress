import initialTest from '../utils/initialTest';

class LoginPage extends initialTest{


   constructor() {
    super();
  }
  
//declare locators of login page 
  UserName     = () => cy.get("#user-name");
  PasswordUser = () => cy.get("#password");
  SubmitButton = () => cy.get("#login-button");
  getItemsLength=() => cy.get("#inventory_container>div>div.inventory_item").its('length');
    
//pom functions
public visitUrl(url:string){return this.visit(url);};

public fillFirstName (name: string){return this.fillText(name,this.UserName());};

public fillPaswword(password: string){return this.fillText(password,this.PasswordUser())};
  
public submitLogin(){return this.submit(this.SubmitButton())};

}

export default LoginPage