// DESCRIPTION:
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

function solve(s){
    let upper = (s.match(/[A-Z]/g) || []).length,
        lower = (s.match(/[a-z]/g) || []).length,
        num = (s.match(/[0-9]/g) || []).length,
        special = s.length - upper - lower - num;
    
    return [upper, lower, num, special];
}