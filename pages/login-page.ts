import initialTest from '../utils/initialTest';

class LoginPage extends initialTest{

public constructor(url?:string, textValue?:string, locator?:string) {
  super(url,textValue,locator);
}

public visitUrl(url: string){return this.visit(url)}

public fillFirstName (name: string,locator: string){
return this.fillText(name,locator)}

public fillPaswword(name: string,locator: string){
return this.fillText(name,locator)}
  
public submitLogin(buttonText : string){return this.submit(buttonText)}
}

export default LoginPage