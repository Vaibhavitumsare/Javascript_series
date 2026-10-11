//const email="vib" --return is part
// const email="" --return else part
const email=[] //--return if part
if(email){
    console.log("got user email")
}
else{
    console.log("dont have  user email")
    
}

// falsy values

// false  , 0,-0,BigInt 0n,"",null,undefined,NAN

// truthy values
// evrything other than falsey id truthy
// "0",'false'," ",[],{},function(){}

const emptyObj={}
if(Object.keys(emptyObj).length===0)
    {console.log("object is empty")}

// Nullish Coalescing operator (??):null undefined

let val1;
// val1=5??10
val1=null??10
// val1=undefined??10

console.log(val1)

// Ternary operator
// condition?true:false

const price=90
price<100?console.log("true"):console.log("false")