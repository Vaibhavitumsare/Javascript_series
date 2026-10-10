// let a=300

// if(true){
//     let a=30
//     let b=10
//     console.log("Inner:",a)
// }
// console.log(a)

// +++++++++++++++++++++++++++++++++++++++

console.log(addOne(5))//works
function addOne(num){
    return num+1
}

//console.log(addOne(5))//works

console.log(addTwo(5))//does not work gives error ( Cannot access 'addTwo' before initialization)
const addTwo=function(num){
    return num+2
}
//console.log(addTwo(5))//works

