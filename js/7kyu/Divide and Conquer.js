// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let numSum = x.filter( num => typeof num == 'number' ).reduce( (acc, c) => acc += c, 0),
        strSum = x.filter( str => typeof str == 'string' ).map( str => Number(str)).reduce( (acc, c) => acc += c, 0)
    return numSum - strSum
}