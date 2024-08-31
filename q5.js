let cart = {
    owner: "Abhishek",
    items: [
        { name: "Laptop", price: 50000, quantity: 5 },
        { name: "Mouse", price: 500, quantity: 0 },
        { name: "USB", price: 300, quantity: 0 },
        { name: "Keyboard", price: 1000, quantity: 2 },
        { name: "Monitor", price: 10000, quantity: 10},
       
    ]
};


//  remove an item from cart if quantity is zero

// calculate the total price of all items in cart


let arr = cart.items
// let l = arr.length // 4
for(let i = 0; i<=arr.length-1; i++){ // 4
    // console.log(arr[i])
    if(arr[i].quantity==0){
        // console.log(arr[i])
        arr.splice(i,1)
        i--
        
    }
}


console.log(cart)



// reducing arrays concept