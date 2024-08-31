
// q4: 
let library = {
    name: "City Library",
    address: "123 Main St",
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "The Catcher in the Rye", author:"George Orwell" }
    ]
};

// print the book whose author is "George Orwell"


let arr = library.books
for(t of arr){
    if(t.author === "George Orwell"){
        console.log(t.title)
    }
}