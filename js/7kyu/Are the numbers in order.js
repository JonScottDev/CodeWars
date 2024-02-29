// function inAscOrder(arr) {
//     let result = ''
//     for( i = 0; i < arr.length; i++){
//       if( arr[i] <= arr[i + 1] ){
//         result = true
//       } else if( arr[i] > arr[i + 1] ) {
//         result = false
//         break
//       }
//     }
//     return result
// }

function inAscOrder(arr) {
    let result = ''
    for( i = 0; i < arr.length; i++){
      if( arr[i] <= arr[i + 1] ){
        result = true
      } else if( arr[i] > arr[i + 1] ) {
        result = false
        break
      }
    }
    return result
}