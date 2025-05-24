import { describe, it } from "mocha";
import { assert } from "chai";
import { underscoreToSpace, mergeAndSortUnique } from "../src/k3.js";

describe("underscoreToSpace", () => {
  it("should replace all underscores with spaces", () => {
    assert.strictEqual(
      underscoreToSpace("this_is_a_snake_case_sentence"),
      "this is a snake case sentence"
    );
  });

  it("should return empty string if input is null", () => {
    assert.strictEqual(underscoreToSpace(null), "");
  });

  it("should return empty string if input is undefined", () => {
    assert.strictEqual(underscoreToSpace(undefined), "");
  });

  it("should return the same string if there are no underscores", () => {
    assert.strictEqual(underscoreToSpace("this is fine"), "this is fine");
  });

  it("should replace multiple underscores", () => {
    assert.strictEqual(underscoreToSpace("___"), "   ");
  });
});

describe("mergeAndSortUnique", () => {
  it("should merge and sort unique elements", () => {
    assert.deepStrictEqual(
      mergeAndSortUnique([1, 3, 5], [2, 3, 4]),
      [1, 2, 3, 4, 5]
    );
  });

  it("should work when one array is empty", () => {
    assert.deepStrictEqual(mergeAndSortUnique([], [2, 1]), [1, 2]);
  });

  it("should return unique values only", () => {
    assert.deepStrictEqual(mergeAndSortUnique([1, 1, 1], [1, 1]), [1]);
  });

  it("should handle already sorted and unique arrays", () => {
    assert.deepStrictEqual(
      mergeAndSortUnique([1, 2, 3], [4, 5]),
      [1, 2, 3, 4, 5]
    );
  });

  it("should handle negative and positive integers", () => {
    assert.deepStrictEqual(
      mergeAndSortUnique([-2, 0, 2], [-1, 1, 2]),
      [-2, -1, 0, 1, 2]
    );
  });
});
