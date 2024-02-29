// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
    let arr = []
    for( i = 0; i < word.length; i++ ){
      if(word[i] == 'a' || word[i] == 'A'){
        arr.push(i + 1)
      } else if(word[i] == 'e' || word[i] == 'E'){
        arr.push(i + 1)
      } else if(word[i] == 'i' || word[i] == 'I'){
        arr.push(i + 1)
      } else if(word[i] == 'o' || word[i] == 'O'){
        arr.push(i + 1)
      } else if(word[i] == 'u' || word[i] == 'U'){
        arr.push(i + 1)
      } else if(word[i] == 'y' || word[i] == 'Y'){
        arr.push(i + 1)
      }
    }
    return arr
}