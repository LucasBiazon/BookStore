export function isStringValid(characterMin: number, characterMax: number, stringVerification: string){
    if(characterMin > characterMax){
      throw new Error("number of minimum characters is greater than the number of maximum characters")
    }
    if(stringVerification.length >= characterMin && stringVerification.length <= characterMax){
      return true
    }
    return false

}