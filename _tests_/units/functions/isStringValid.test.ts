import { isStringValid } from "../../../src/utils/isStringValid";

describe('String  lenght validator', () => {
  it('should return true string validator', () => {
      const characterMin: number = 3;
      const characterMax: number = 10;
      
      expect(isStringValid(characterMin, characterMax, "abc")).toBeTruthy();
      expect(isStringValid(characterMin, characterMax, "abcdefghjk")).toBeTruthy();
  });
  it('should return false string validator', () => {
    const characterMin: number = 5;
    const characterMax: number = 50;
    
    expect(isStringValid(characterMin, characterMax, "abc")).toBeFalsy();
  });
  it('should return false string validator', () => {
    const characterMin: number = 3;
    const characterMax: number = 5;
    
    expect(isStringValid(characterMin, characterMax, "ashhhhhh")).toBeFalsy();
  });
  it('should return Error string validator', () => {
    const characterMin: number = 6;
    const characterMax: number = 3;
    
    expect(() => isStringValid(characterMin, characterMax, "abc")).toThrow();
  });
})