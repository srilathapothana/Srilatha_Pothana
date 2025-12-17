// Function to generate odd numbers
function generateOddNumbers(a) {
    let result = [];

    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }

    return result;
}

// Example input
let a = 4;

// Execution
let output = generateOddNumbers(a);
console.log(output.join(", "));
