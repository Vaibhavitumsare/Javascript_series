let arr=[0,1,2,3,4,5]

// arr.push(6)
// console.log(arr)
// arr.unshift(9)
// console.log(arr)
// arr.shift()
// console.log(arr)

// const newArray=arr.join()
// console.log(arr)
// console.log(typeof arr)//object
// console.log(newArray)
// console.log(typeof newArray)//string

const my1=arr.slice(1,3)
console.log("A",arr)
console.log(my1)

console.log("B",arr)
const my2=arr.splice(1,3)
console.log(my2)
console.log(arr)

//slice -does not include last element of boundary and does not change original array
// splice- include last element of boundary and does change original array