// --- DATA TYPES ----
// ----- Primitive----
// numbers
// string 
// Boolean
// undefined
// null
// symbol
// BigInt
// ----- NON Primitive----
// Array
// objects
// function
// date

//strings are immutable 
let greeting = "Hello";
greeting[0] = "Y"; 
console.log(greeting); 

//If you want to change or modify a string, you need to create a new one.
let name = "Big";
let newName = name + "Belly"; 
console.log(newName); 
console.log(name);  

//Represents the absence of an assigned value. If a variable is declared but not initialized, it has the value undefined.
let x

// Represents the intentional absence of any object value. It is used to indicate "no value" or "empty".
let w = null

//Symbol is immutable data type primarily used to create unique identifiers for object properties
let id1 = Symbol('id');
let id2 = Symbol('id'); 

let user = {
  [id1]: 123,
  [id2]: 456 ,
  age : 25
};

console.log(user[id1]); 
console.log(user[id2]); 

let sym1 = Symbol.for('sharedSymbol');
let sym2 = Symbol.for('sharedSymbol');

console.log(sym1 === sym2); 

console.log(Symbol.keyFor(sym1)); 
console.log(Symbol.keyFor(sym2)); 

let set = new Set([1, 2, 3, 3]);
console.log(set); 

