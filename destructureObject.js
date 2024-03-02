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
console.log(firstName, age)

// we can also use default values just like we did in arrays 
const {name:firstName1, age:age1 = 20} = personTwo