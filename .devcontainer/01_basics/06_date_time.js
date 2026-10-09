// let myDate=new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

// let myCreateDate=new Date("2023-01-14")
// console.log(myCreateDate)
// console.log(myCreateDate.toLocaleString())

// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()

console.log(`${newDate.getDay()} and Time`)

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))