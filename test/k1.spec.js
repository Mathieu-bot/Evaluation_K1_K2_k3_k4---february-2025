import { makeAllPositive, isAscOrDesc } from "../src/k1.js";
import { describe, it } from "mocha";
import { assert } from "chai";

describe("test for the function makeAllPositive", () => {
  it("should return [] when the input is null or an empty array or not defined", () => {
    assert.deepEqual(makeAllPositive([]), []);
    assert.deepEqual(makeAllPositive(null), []);
    assert.deepEqual(makeAllPositive(), []);
  });
  it("should convert negative numbers to positive", () => {
    const input = [-1, -2, 3, -4];
    const expected = [1, 2, 3, 4];
    assert.deepStrictEqual(makeAllPositive(input), expected);
  });

  it("should return the same array if all numbers are positive", () => {
    const input = [1, 2, 3];
    assert.deepStrictEqual(makeAllPositive(input), input);
  });

  it("should handle zero and negatives", () => {
    const input = [0, -3, -5];
    const expected = [0, 3, 5];
    assert.deepStrictEqual(makeAllPositive(input), expected);
  });
});
describe("test for the fuction who check sorted array.", () => {
  it("should return 'yes, asc' for ascending array", () => {
    assert.strictEqual(isAscOrDesc([1, 2, 3, 4]), "yes, asc");
  });

  it("should return 'yes, desc' for descending array", () => {
    assert.strictEqual(isAscOrDesc([5, 4, 3, 2]), "yes, desc");
  });

  it("should return 'no' for unsorted array", () => {
    assert.strictEqual(isAscOrDesc([3, 1, 4]), "no");
  });

  it("should return 'yes, asc' for all identical elements", () => {
    assert.strictEqual(isAscOrDesc([7, 7, 7]), "yes, asc");
  });

  it("should return 'yes, asc' for one element", () => {
    assert.strictEqual(isAscOrDesc([42]), "yes, asc");
  });

  it("should return 'yes, asc' for 2-element ascending", () => {
    assert.strictEqual(isAscOrDesc([1, 2]), "yes, asc");
  });

  it("should return 'yes, desc' for 2-element descending", () => {
    assert.strictEqual(isAscOrDesc([2, 1]), "yes, desc");
  });
});
