import { passwordValidator } from "../../../src/utils/passwordValidator";


describe('Password validator', () => {
  it('should return true for valid password', () => {
      const validPassword: string[] = [
        'passw0rd',
        'p4ssw0',
        'password12.'
      ];
      validPassword.map(password => {
        expect(passwordValidator(password)).toBeTruthy();
      });
  });
  
  it('should return false for valid password', () => {
    const invalidPassword: string[] = [
      'p1',
      'pasword',
      '123456'
    ];
    invalidPassword.map(password => {
      expect(passwordValidator(password)).toBeFalsy();
    });
  })
})