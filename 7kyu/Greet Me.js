// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    let result = []
    for( i = 0; i < name.length; i++ ){
      if( i == 0 ){
        result.push(name[0].toUpperCase())
      } else {
        result.push(name[i].toLowerCase())
      }
    }
    return `Hello ${result.join('')}!`
  };