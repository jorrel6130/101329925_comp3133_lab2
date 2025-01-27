// Jorrel Tigbayan 101329925
var calculator = require("../app/calculator")
var assert = require("assert");

describe("Calculator", () => {
    describe("Addition", () => {
        it("add(5,2) expected result 7", () => {
            var calculation = calculator.add(5, 2)
            assert.equal(calculation, 7);
        })
        it("add(5,2) expected result 8", () => {
            var calculation = calculator.add(5, 2)
            assert.equal(calculation, 8);
        })
    })
    describe("Subtraction", () => {
        it("sub(5,3) expected result 2", () => {
            var calculation = calculator.sub(5, 3)
            assert.equal(calculation, 2);
        })
        it("sub(5,3) expected result 3", () => {
            var calculation = calculator.sub(5, 3)
            assert.equal(calculation, 3);
        })
    })
    describe("Multiplication", () => {
        it("mul(3,5) expected result 15", () => {
            var calculation = calculator.mul(3, 5)
            assert.equal(calculation, 15);
        })
        it("mul(3,5) expected result 12", () => {
            var calculation = calculator.mul(3, 5)
            assert.equal(calculation, 12);
        })
    })
    describe("Division", () => {
        it("div(10,5) expected result 2", () => {
            var calculation = calculator.div(10, 5)
            assert.equal(calculation, 2);
        })
        it("div(10,5) expected result 1", () => {
            var calculation = calculator.div(10, 5)
            assert.equal(calculation, 1);
        })
    })
})