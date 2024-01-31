// DESCRIPTION:
// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.
// More examples in the test cases.

// Good luck!

function pairs(ar){
    return ar.reduce( (result, value, index, array ) => {
      if( index % 2 == 0 ){
        result.push( array.slice(index, index + 2));
      }
      return result;
    }, []).filter( arr => Math.abs([ arr[0] - arr[1] ] ) == 1 ).length;
};