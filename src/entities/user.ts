import { emailValidator } from "../utils/emailValidator";
import { isStringValid } from "../utils/isStringValid";
import { passwordValidator } from "../utils/passwordValidator";

const minCharacterName: number = 3;
const maxCharacterName: number = 50;
const minCharacterDescription: number = 3;
const maxCharacterDescription: number = 100;

interface UserProps {
  name: string 
  email: string;
  password: string;
  description: string;
}

export class User{
  props: UserProps

  constructor({name, email, password, description}: UserProps){
    if(!isStringValid(minCharacterName, maxCharacterName, name)){
      throw new Error("Name is invalid")
    }
    if(!emailValidator(email)){
      throw new Error("Email is invalid")
    }
    if(!passwordValidator(password)){
      throw new Error("Password is invalid")
    }
    if(!isStringValid(minCharacterDescription, maxCharacterDescription, description)){
      throw new Error("Description is invalid")
    }
    
    this.props = {
      name: name,
      email: email,
      password: password,
      description: description
    }
  }
}