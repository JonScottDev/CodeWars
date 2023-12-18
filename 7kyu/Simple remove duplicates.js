// Simple remove duplicates
// 2879292% of 1,6435,303 of 13,249KenKamau
// JavaScript
// TRAIN AGAINNEXT KATA
// Details
// Solutions
// Forks (11)
// Discourse (120)
// Translations
// Fork|Collect|
// DESCRIPTION:
// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

function solve(arr) {
    let newArr = arr.slice().filter((n, i) => arr.indexOf(n) !== i)
    for(let i = 0; i< newArr.length; i++){
      arr.splice(arr.indexOf(newArr[i]), 1)
    }
    return arr
}