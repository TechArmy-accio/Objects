
let items = [
    { name: "Banana", price: 50 },
    { name: "Apple", price: 20 },
    { name: "Orange", price: 30 }
];

// .. sort in ascending order base on price

// items.sort((a,b)=>a.price-b.price)

// console.log(items)


let employees = [
    { name: "Hannah", department: "Finance" },
    { name: "Sarah", department: "IT" },
    { name: "Zryan", department: "Finance" },
    { name: "Mike", department: "IT" },
    { name: "Yshley", department: "Finance" },
    { name: "Jeff", department: "IT" }
  ];

// sort it based on department in descending order and if department is same then sort it based on name in ascending order


employees.sort((a,b)=>{
     
//    return a.department < b.department ? 1 : (a.department > b.department ? -1 : (a.name < b.name ? -1 : 1))

    // if(a.department < b.department){
    //     return 1
    // }
    // else if(a.department > b.department){
    //     return -1
    // }
    // else{
    //     if(a.name < b.name){
    //         return -1
    //     }
    //     else{
    //         return 1
    //     }
    // }

    

})


// console.log(employees)

// console.log("Ramesh" > "Zah")



// let str1 = "Zramesh"
// let str2 = "Zah"

// console.log(str1.localeCompare(str2))  // 1,0,-1

// arr.sort( (a,b) => a.localeCompare(b) )