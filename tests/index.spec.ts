import { sum } from "../src/index";

describe('index', () => {
  test('yeah', () => {
    expect(sum(1,2)).toEqual(3)
  })
})