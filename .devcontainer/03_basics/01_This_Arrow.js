// const user={
//     name:"Riva",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.name} , welcome to website`)
//         // console.log(this)
//     }
// }

// user.welcomeMessage()
// // user.name="jaden"
// // user.welcomeMessage()
// console.log(this)//return empty object

function chai(){
    let user="reva"
     console.log(this) //return lot of detailed info
    //console.log(this.user)//returns undefined
}
chai()

// ===arror function

// const chai=()=>{
//     let user="reva"
//     console.log(this)//returns empty object
// }
// chai()

const addTwo=(num1,num2)=>num1+num2
console.log(addTwo(4,4))

const addTwo1=(num1,num2)=>({user:"reva"})//to return object using arro fuction
console.log(addTwo1())