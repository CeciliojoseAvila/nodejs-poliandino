import { getUserById } from "../../src/js-foundation/4-callbacks";

describe("js-foundation/4-callbacks", () => {
  test("getUserById deberia sacar error si mando el cliente 9999999999", () => {
    //1. Arrange.
    const id = 9999999999;

    getUserById(id, (err, user) => { 
      expect().toBe();
    }) 

  });
});