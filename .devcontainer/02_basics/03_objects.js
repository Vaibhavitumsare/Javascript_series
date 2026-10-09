// literals object =not singleton
// constructor object=singleton

//object literals

const mySymbol=Symbol("key1")

const JsUser={
    name:"Vaibhavi",
    "fullname":"Vaibhavi Tumsare",
    [mySymbol]:"key1",
    location:"Pune",
    email:"vaibh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.fullname)
// console.log(JsUser[mySymbol])

JsUser.email="vaibhavi@gmail.com"
//Object.freeze(JsUser)
JsUser.email="123@gmail.com"
console.log(JsUser)

// +++++++ Functions +++++++++
JsUser.greeting=function(){
    console.log("Hello Users")
}

JsUser.greetingTwo=function(){
    console.log(`Hello JsUser ${this.name}`)
}

JsUser.greeting()
JsUser.greetingTwo()