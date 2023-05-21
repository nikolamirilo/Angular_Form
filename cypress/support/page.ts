import  TextInput from "./textInput";
import Checkbox  from "./checkbox";
const selectors = require("../fixtures/selectors.json");

class Page{
    fullName : TextInput;
    username: TextInput;
    email: TextInput;
    password: TextInput;
    confirmPassword : TextInput;
    acceptTerms: Checkbox;
    constructor(selectors:any){
        this.fullName = new TextInput(selectors.fullName);
        this.username = new TextInput(selectors.username)
        this.email = new TextInput(selectors.email);
        this.password = new TextInput(selectors.password);
        this.confirmPassword = new TextInput(selectors.confirmPassword);

        this.acceptTerms = new Checkbox(selectors.acceptTerms);
    }
}

export default new Page(selectors);