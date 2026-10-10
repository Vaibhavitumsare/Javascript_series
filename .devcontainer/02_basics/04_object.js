// const obj=new Object() //singleton object
// console.log(obj)

// const obj1={} //non singleton object
// console.log(obj1)

const user={
    email:"abc@gmail.com",
    username:{
        fullname:{
            name:"Riya",
            Surname:"Ranjit"
        }

    }
}

// console.log(user)
// console.log(user.email)
// console.log(user.username)
// console.log(user.username.fullname)
// console.log(user.username.fullname.name)

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj4={5:"e",6:"f"}
// ///const obj3=Object.assign({},obj1,obj2,obj4)
// //console.log(obj3)

// const obj3={...obj1,...obj2,...obj4}
// console.log(obj3)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

//console.log(user.hasOwnProperty('email'))

const {username:use}=user
console.log(use.fullname)