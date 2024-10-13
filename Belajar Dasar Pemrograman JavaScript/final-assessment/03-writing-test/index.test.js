import { sum } from "./index.js";
import { strict as assert } from "node:assert";
import test from "node:test";

test("sum should return the sum of two numbers", t => {
    // Test case 1: Sum of positive numbers
    assert.equal(sum(2, 3), 5, "2 + 3 should equal 5");

    // Test case 2: Sum of negative numbers
    assert.equal(sum(-2, -3), -5, "-2 + -3 should equal -5");

    // Test case 3: Sum of positive and negative number
    assert.equal(sum(2, -3), -1, "2 + (-3) should equal -1");
    assert.equal(sum(-2, 3), 1, "(-2) + 3 should equal 1");

    // Test case 4: Sum with zero
    assert.equal(sum(0, 5), 5, "0 + 5 should equal 5");
    assert.equal(sum(5, 0), 5, "5 + 0 should equal 5");

    // Test case 5: Sum of number and string number
    assert.equal(sum(1, "2"), "12", "1 + '2' should equal '12'");
    assert.equal(sum("1", 2), "12", "'1' + 2 should equal '12'");

    // Test case 6: Sum with string number
    assert.equal(sum("1", "2"), "12", "1 + '2' should equal '12'");
});