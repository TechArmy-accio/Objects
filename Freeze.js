

// let obj = {
//     "apple" : 10,
//     "mango" : 20,
//     "lichi" : 30, 
//     "banana" : 40,
//     "gauava" : 50 ,
// }
// obj.apple = 100
// Object.freeze(obj) // this will  make the object immutable or read only



// // obj.apple = 100

// delete obj.apple

// console.log(obj)

// const obj1 ={
//     "apple" : 10,
//     "mango" : 20,
//     "lichi" : 30, 
//     "banana" : 40,
//     "gauava" : 50 ,
// }

// obj1.apple = 100


// obj1 = {a:10, b:20} // this will give error as obj1 is a const variable and we cannot reassign it



// let obj = {
//     name : "Rahul",
//     age : 20,
//     city : "Delhi",
//     favourtite: {
//         food: "Biryani",
//         color: "Blue",
//         clothes: {
//             shirt: "White",
//             trousers: {
//                 color: "Black",
//                 type: "Denim"
//             }
//         }

//     }
// }

// Object.freeze(obj)

// obj.name = "Rohit"

// obj.favourtite.food = "Pizza"

// console.log(obj)


// function deepFreeze(obj){
    
// }


// let arr = [1,2,3,4,5]

// // arr[0] = 100 
// // arr.push(28e128)

// arr = [10,20,30]



let obj = {
    name : "Rahul",
    city : "Delhi",
    favourtite: {
        food: "Biryani",
        clothes: {
            shirt: "White",
            trousers: {
                color: "Black",
            }
        }

    },
    song:  "Dil Diyan Gallan"
}



function deepFreeze(obj){

    for(let t of obj){
          if(typeof(t) == "object"){
            deepFreeze(t)
          }
    }

    return Object.freeze(obj)
}





deepFreeze(obj)