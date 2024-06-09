import { User } from "../../../src/entities/user";

describe('user class', () => {
  it('should return instace of user', () => {
    const user = new User({
      name: "userName",
      email: "userName@example.com",
      password: "p4ssw0rd",
      description: "Description example"
    });

    expect(user).toBeInstanceOf(User);
  });

  it('should return error of user', () => {
    expect(() => new User({
      name: "ue",
      email: "userName@example.com",
      password: "p4ssw0rd",
      description: "Description example"
    })).toThrow()
  });

  it('should return error of user', () => {
   
    expect(() =>  new User({
      name: "userName",
      email: "userName@examplecom",
      password: "p4ssw0rd",
      description: "Description example"
    })).toThrow()
  });

  it('should return error of user', () => {
    expect(() => new User({
      name: "userName",
      email: "userName@example.com",
      password: "pasword",
      description: "Description example"
    })).toThrow()
  });
  
  it('should return error of user', () => {
    expect(() => new User({
      name: "userName",
      email: "userName@example.com",
      password: "p4ssw0rd",
      description: "De"
    })).toThrow()
  });
})