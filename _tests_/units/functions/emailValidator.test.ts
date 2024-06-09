import { emailValidator } from "../../../src/utils/emailValidator";


describe("Email verification", () => {
  
  it('should return true for valid email', () => {
    const validEmails: string[] = [
      'test@example.com',
      'user.name+tag+sorting@example.com',
      'user@sub.example.com',
      'user@example.co.uk',
      'user.name@example.com'
    ];

    validEmails.forEach(email => {
      expect(emailValidator(email)).toBeTruthy();
    });
  });

  it('should return false for valid email', () => {
    const invalidEmails: string[] = [
      'plainaddress',
      '@missingusername.com',
      'username@.com',
      'username@.com.',
      'username@missingtld',
      'username@sub..com',
      'username@-example.com',
      'username@example,com'
    ];

    invalidEmails.forEach(email => {
      expect(emailValidator(email)).toBeFalsy
    })
  })

})