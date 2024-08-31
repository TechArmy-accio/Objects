Objects: 

1. Object.freeze()

Object.freeze(object);

What Object.freeze() Does:

	•	Prevents adding new properties: You cannot add new properties to the object.
	•	Prevents removing existing properties: You cannot delete existing properties from the object.
	•	Prevents modifying existing properties: You cannot change the values of existing properties.
	•	Prevents reconfiguring existing properties: You cannot change the property descriptors (like making them writable, enumerable, or configurable).

Example:

const person = {
    name: "Abhishek",
    age: 30
};

// Freeze the object
Object.freeze(person);

// Attempting to modify an existing property will have no effect
person.age = 31;
console.log(person.age);  // Output: 30

// Attempting to add a new property will have no effect
person.gender = "Male";
console.log(person.gender);  // Output: undefined

// Attempting to delete a property will have no effect
delete person.name;
console.log(person.name);  // Output: Abhishek

Checking if an Object is Frozen

You can check if an object is frozen using Object.isFrozen():

console.log(Object.isFrozen(person));  // Output: true

Important Note:

	•	Shallow Freeze: Object.freeze() only makes the object itself immutable, but not the nested objects. If the object contains other objects or arrays as properties, those nested objects or arrays are still mutable unless they are also frozen individually.

Example with Nested Object:

const person = {
    name: "Abhishek",
    address: {
        city: "Bangalore",
        country: "India"
    }
};

Object.freeze(person);

person.address.city = "Mumbai";  // This will still work because `address` is not frozen
console.log(person.address.city);  // Output: Mumbai

To deeply freeze an object, you’d need to recursively freeze all nested objects as well.

2. Object.defineProperty()

Object.defineProperty(object, propertyName, {
    value: value,
    writable: boolean,
    enumerable: boolean,
    configurable: boolean
});

const obj = {};
Object.defineProperty(obj, 'prop', {
  value: 42,
  writable: false, // cannot be changed but can be 
  enumerable: true,
  configurable: false
});

obj.prop = 33; // Does nothing because writable is false
console.log(obj.prop); // 42



3. Object.isFrozen()

Object.isFrozen(object);

4. deepFreeze Function

function deepFreeze(obj) {
    const propertyNames = Object.getOwnPropertyNames(obj);

    for (const name of propertyNames) {
        const value = obj[name];

        if (typeof value === 'object' && value !== null) {
            deepFreeze(value);
        }
    }

    return Object.freeze(obj);
}

11. Object.seal() 

Object.seal(object)

12. Object.isSealed()

Object.isSealed(object);




5. Object.assign()

Object.assign(target, ...sources);



7. Object.keys(), Object.values()

Object.keys(object); // only enumerable

10. Object.entries(obj) 

const obj = {
  a: 1,
  b: 2,
  c: 3
};

const entries = Object.entries(obj);
console.log(entries);





8. Object.getOwnPropertyNames()

Object.getOwnPropertyNames(object); // both enumerable and nenumerable




9. Object.getOwnPropertyDescriptor()

Object.getOwnPropertyDescriptor(object, propertyName);

const obj = {
  a: 1
};

const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
console.log(descriptor);
















6. Object.create()

Object.create(proto, propertiesObject);


10. Object.defineProperties()

Object.defineProperties(object, descriptors);