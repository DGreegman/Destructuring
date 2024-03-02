/* 
    this is used to destructure objects

*/

const personOne = {
    name: 'John',
    age: 30,
    address:{
        city: 'New York',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Doe',
    age: 35,
    address:{
        city: 'New York',
        state: 'Two of them'
    }
}

// in destructuring objects you will use the exact key match in the object for your destructuring 
// eg in the personTwo we have name, age so we must use them in out destructuring 
// if you want to use another name you can do it as we have below name:firstName and output the firstName 
// so it doesn't depend on position like we have in arrays but depends on keys

const {name:firstName, age } = personTwo
console.log(firstName, age) // output Doe 35


 
// we can also use default values just like we did in arrays 
const {name:firstName1, age:age1 = 20} = personTwo
console.log(firstName1, age1) // output Doe 20


// we can also use the spread operator to destructure objects
const {name:firstName2, ...rest} = personTwo
console.log(firstName2, rest) // output Doe { age: 35, address: { city: 'New York', state: 'Two of them' } }


// we can also destructure objects inside objects
const {address:{city, state}} = personTwo
console.log(city, state) // output New York Two of them


// combining two objects using the spread operator
// note that when combining two objects the second one replaces the first one
// so in this code personOne replaced personTwo using the spread operator 

const personThree = {...personTwo, ...personOne}
console.log(personThree) //output 


// using it in a function 
function printPerson({name, age}){
    console.log(name, age)
}

printPerson(personOne) //output John 30


// you can use it using default parameters in a function 

function printPersonDefault({name, age, favouritFood="Rice"}){
    console.log(name, age, favouritFood)
}

printPersonDefault(personTwo) //output John 35 Rice