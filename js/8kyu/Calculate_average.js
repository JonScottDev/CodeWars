// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(arr) {
    return arr === null || arr.length === 0 ? 0 : (arr.reduce((acc, c) => acc += c)) / arr.length
}

// short hand
const findAverage = arr => arr === null || arr.length === 0 ? 0 : (arr.reduce((acc, c) => acc += c)) / arr.length