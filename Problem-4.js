// Function to count multiples
function countMultiples(numbers) {
    let result = {};

    for (let i = 1; i <= 9; i++) {
        let count = 0;

        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] % i === 0) {
                count++;
            }
        }

        result[i] = count;
    }

    return result;
}

// Example input
let numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];

// Execution
let output = countMultiples(numbers);
console.log(output);
