let score=null

console.log(typeof score)

let valueInNumber=Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)

// "33"=33
// "22abc"=NAN(Not an integer)

// true=1; false=0
let IsLoggedIn=1;
let boolean=Boolean(IsLoggedIn)
console.log(boolean)

// 1=true
// ""=false
// "vaibhavi"=true

let string=String(IsLoggedIn)
console.log(string)


// Operations
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1="hello"
let str2=" vaibhavi"
let str3=str1+str2
console.log(str3)

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32

console.log(true) //true
console.log(+true) //1
console.log(+""); //0

// == and (< or >) works little diffrent to each  other
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true

console.log(undefined>0)//false
console.log(undefined==0)//false
console.log(undefined>=0)//false

//===  ->strict check (check value as well as data type for comparison) 