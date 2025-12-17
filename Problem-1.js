// Calculator class
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    calculate(operation) {
        if (operation === "add") {
            return this.a + this.b;
        } else if (operation === "subtract") {
            return this.a - this.b;
        } else if (operation === "multiply") {
            return this.a * this.b;
        } else if (operation === "divide") {
            return this.b !== 0 ? this.a / this.b : "Division by zero not allowed";
        } else {
            return "Invalid operation";
        }
    }
}

// Example input
let a = 10;
let b = 5;
let operation = "add";

// Execution
let calculator = new Calculator(a, b);
console.log(calculator.calculate(operation));
