import { makeSpeechFunnier, countDuplicate } from "../src/k2.js";
import { describe, it } from "mocha";
import { assert } from "chai";

describe("test for the function makeSpeechFunnier", () => {
   it("should replace each period with ' xD'", () => {
    assert.strictEqual(makeSpeechFunnier("Hello."), "Hello xD");
  });

  it("should replace multiple periods correctly", () => {
    assert.strictEqual(makeSpeechFunnier("Hi. How are you."), "Hi xD How are you xD");
  });

  it("should return original string if no periods", () => {
    assert.strictEqual(makeSpeechFunnier("No period here"), "No period here");
  });

  it("should handle empty string", () => {
    assert.strictEqual(makeSpeechFunnier(""), "");
  });

  it("should not insert extra spaces", () => {
    assert.strictEqual(makeSpeechFunnier("End."), "End xD");
  });
});
describe("test countDuplicate", () => {
    it("should return 2 for [1, 1, 2, 2]", () => {
    assert.strictEqual(countDuplicate([1, 1, 2, 2]), 2);
  });

  it("should return 0 for [1, 2, 3]", () => {
    assert.strictEqual(countDuplicate([1, 2, 3]), 0);
  });

  it("should return 1 for [1, 2, 2, 3]", () => {
    assert.strictEqual(countDuplicate([1, 2, 2, 3]), 1);
  });

  it("should return 0 for an empty array", () => {
    assert.strictEqual(countDuplicate([]), 0);
  });

  it("should handle multiple duplicates", () => {
    assert.strictEqual(countDuplicate([4, 4, 4, 4, 5, 5, 6]), 2);
  });
})
