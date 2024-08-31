
// let obj = {
//     "apple" : 10,
//     "mango" : 20,
//     "lichi" : 30,
// }


// for(let k in obj){
//     console.log(k) // apple, mango, lichi
// }


// Object.freeze(obj)



// console.log(Object.isFrozen(obj))


// let bankDetails = {
//     name: "Rahul",
// }


// // Object.defineProperty()

// // Object.defineProperty(bankDetails, "name", {
// //     value: "Rahul",
// //     writable: true, // edit
// //     enumerable: true, // show in for in loop
// //     configurable: true // delete
// // })

// Object.defineProperty(bankDetails, "bankaccount", {
//     value: 1234567890,
//     writable: false,
//     enumerable: true,
//     configurable: true
// })

// Object.defineProperty(bankDetails, "Pan", {
//     value: "ABCDE1234F",
//     writable: false,
//     enumerable: true,
//     configurable: false
// })

// Object.defineProperty(bankDetails, "driver", {
//     value: "DL123456",
//     writable: true,
//     enumerable: false,
//     configurable: true
// })


// console.log(bankDetails)


// // bankDetails.name = "Rohit"

// // delete bankDetails.name

// // bankDetails.bankaccount = 567

// // delete bankDetails.bankaccount


// // bankDetails.Pan = "ABCDE1234G"

// delete bankDetails.Pan


// console.log(bankDetails)




// let obj  = {
//     name : "Rahul",
//     age : 20,
//     city : "Delhi",
    
// }

// Object.defineProperty(obj, "pan", {
//     value: "ABCDE1234F",
//     writable: false,
//     enumerable: true,
//     configurable: false
// })

// console.log(obj)



// let obj = {
//     name: "Rahul",
//     age: 20,
//     city: "Delhi",
// }


// Object.seal(obj)


// console.log(Object.isSealed(obj))
// obj.name = "Rohit"

// delete obj.name

// obj.song = "Dil Diyan Gallan"

// console.log(obj)




let obj = {

    name: "Rahul",
    age: 20,
    city: "Delhi",

}

Object.defineProperty(obj, "id", {
    value: 123,
    enumerable: false,
    
})


// console.log(Object.keys(obj))

// console.log(Object.values(obj))


// console.log(Object.entries(obj))


// console.log(Object.getOwnPropertyNames(obj))

// console.log(Object.getOwnPropertyDescriptors(obj))