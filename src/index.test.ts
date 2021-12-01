import index from "./index";

test("index functions should return 'Hello world!'", () => {
  expect(index()).toBe("Hello world!");
});
