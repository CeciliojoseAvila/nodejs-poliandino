//AAA
describe("Test in app File", () => {
  test("Debe sumar 10", () => {
    //1. Arrange.
    const num1 = 4;
    const num2 = 6;

    //2. Act.
    const result = num1 + num2;

    //3. Assert.
    expect(result).toBe(10);
  });
});