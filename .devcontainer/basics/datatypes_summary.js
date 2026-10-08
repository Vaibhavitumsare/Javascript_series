//Primitive - call by value
//7 categories
//    String ,Number,null,undefined,Symbol,BigInt

const id=Symbol(123)
console.log(id)
const AnotherId=Symbol(123)
console.log(AnotherId)
console.log(id===AnotherId)

const bigNumber=127539393593753n

//Non primitive -Call by reference
//    Array,Objects,Functions

const heroes=["shaktiman","naagraj","doga"]

let myobj={ //everything inside curly brckets is objet
    name:"vaibhavi",
    age:22
}

const myfunction=function(){}

//primitive typeof values : 
// Number => number
// String => string
// Boolean => boolean
// null => object
// Undefined => undefined
// Symbol => symbol
// BigInt => bigint

//for non prem 
// array => object.
// object => object.
// function => function. // said as : (function object)