// q1: 

let obj1 = {
    "full-name" : "Rahul",
    "age" : 20,
    "city" : "Delhi",
}

// console.log(obj1["full-name"])

let value = obj1["full-name"]


obj1["first-name"] = value

delete obj1["full-name"]
console.log(obj1)

// console.log(obj1["first-name"])

// replace "full-name" key with "first-name"


// q2: 


// merger both object into one object allDetails




// q4: 
let library = {
    name: "City Library",
    address: "123 Main St",
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
};

// print the book whose author is "George Orwell"


// q5:



// q4: 

// create an array of object , each objects will have name and age of a person
// print the name of the person who are eligible to vote (age >= 18)

// let arr = [
//     {name:"Rahul", age:20}, 
//     {name:"Rohit", age:17}, 
//     {name:"Rohan", age:18}
// ]



// q5:

// check if a key is present in an object or not

let obj = {
    name : "Rahul",
    age : 20,
    city : "Delhi",
}

// obj.apple = 100

// console.log(obj.xyz)


console.log("xyz" in obj)
