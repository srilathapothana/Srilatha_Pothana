// Function to generate series based on input
function generateSeries(a) {
    let limit;
    let result = [];

    if (a % 2 === 0) {
        limit = a - 1;
    } else {
        limit = a;
    }

    for (let i = 0; i < limit; i++) {
        result.push(2 * i + 1);
    }

    return result;
}

// Example input
let a = 6;

// Execution
let output = generateSeries(a);
console.log(output.join(", "));
