const alphabets = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = [1, 2, 3, 4, 5, 6]

// initially it will be 
const _a = alphabets[0]
const _b = alphabets[1]
console.log(_a, _b) // output A B

// after destructuring
const [x, y, z] = alphabets
console.log(x, y, z) // output A B C

// what if we want to escape B
const [a, , b] = alphabets 
console.log(a, b) // output A C

// what if we want to escape C
const [c, , , d] = alphabets
console.log(c, d) // output A D

// getting the rest of the array 
// the ... is a spread operator that helps to capture the rest of the array
const [e, ...rest] = alphabets
console.log(e, rest) // output A [ 'B', 'C', 'D', 'E', 'F' ]



// using it to combine to arrays together 
// you achieve this by using the spread operator on each of the arrays 
const combined = [...alphabets, ...numbers]
console.log(combined) // output [ 'A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6 ]


// using it in a function 
function sumAndMultiply(a, b) {
  return [a + b, a * b]
}

const [sum, multiply] = sumAndMultiply(5, 6)
console.log(sum, multiply) // output 11 30

function sumAndMultiplyDefaultValues(a, b) {
    return [a + b, a * b]
  }
  
  const [sum1, multiply1, division='No Division'] = sumAndMultiplyDefaultValues(5, 6)
  console.log(sum1, multiply1, division) // output 11 30 No Division
  
//   if we add the third parameter it will be worked on

/* function sumAndMultiplyDefaultValues(a, b) {
    return [a + b, a * b, a/b]
  }
  
  const [sum1, multiply1, division='No Division'] = sumAndMultiplyDefaultValues(5, 6)
  console.log(sum1, multiply1, division) // output 11 30 0.8333333333333334 */
