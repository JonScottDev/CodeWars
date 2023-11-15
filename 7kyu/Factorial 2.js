// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
    let result = 1
    if( n == 0 ){
      return result
    }
    for( i = n; i > 0; i-- ){
      result *= i
    }
    return result
}