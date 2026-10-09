//Primitive - call by value -stored in stack(we save copy)
//7 categories
//    String ,Number,null,undefined,Symbol,BigInt

const id=Symbol(123)
console.log(id)
const AnotherId=Symbol(123)
console.log(AnotherId)
console.log(id===AnotherId)

const bigNumber=127539393593753n

//Non primitive -Call by reference -stored in heap
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


//for stack -calling the copies
let lname="riya"
let sname=lname
console.log(lname)
console.log(sname)
sname="siya"
console.log(lname)//did not change
console.log(sname)//chnaged

//for heap -referencing to same thing in  memory
let user={
    email:"hello@gmail.com",
    age:12,
}
console.log(user.email)

let user2=user
console.log(user.email)
console.log(user2.email)

user2.email="google.com"
console.log(user.email)//changed
console.log(user2.email)//changed
