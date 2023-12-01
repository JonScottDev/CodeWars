// DESCRIPTION:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    return x.split('').map( c => {
      if( c == 'a'){
        return c = 'b' 
      } else if( c == 'b' ){
        return c = 'a'
      } else{
        return c
      }
    } ).join('')
}