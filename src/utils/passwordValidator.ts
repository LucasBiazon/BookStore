export function passwordValidator(password: string){
  const regexPassordValidator = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
  const minimumLength: number = 6;
  if(password.length >= minimumLength){
    if(regexPassordValidator.test(password)){
      return true;
    }
  }
  return false;
} 