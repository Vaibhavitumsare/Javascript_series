// function sayMyName(){
//     console.log("R")
//     console.log("I")
//     console.log("V")
//     console.log("A")
// }

// sayMyName()

// function addTwoNumbers(n1,n2){
//     //console.log(n1+n2)
//     return n1+n2
// }

// const result =addTwoNumbers(3,4)
// console.log(result)

// function loggedInUser(username="sam")//default name
// {
//     if(username==undefined){
//         console.log("please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loggedInUser())//if we dont pass argument we get undefined as result

// console.log(loggedInUser("Vaibhavi")) 


// function calculateCartPrice(...num){ //...->rest (put everything in one array)
//     return num
// }

// console.log(calculateCartPrice(200,300,3000,455))

// function calculateCartPrice1(val1,val2,...num){
//     return num //...->rest (put everything in one array,first two vale in val1 and val2 and remaining in array)
//     return num
// }

// console.log(calculateCartPrice1(200,300,3000,455))
const user={
    name:"Riva",
    price:499
}

function handleObject(anyobject){
    console.log(`${anyobject.name} is my name and price of item is ${anyobject.price}`)
}

handleObject({name:"Sam",price:399})
handleObject(user)

const arr=[1,2,3,4]

function myarr(a){
    return a[1]
}
console.log(myarr(arr))