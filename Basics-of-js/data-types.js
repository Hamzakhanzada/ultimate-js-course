// primitive data types and objects
// primitive data type or a set of data types in javascript
// and object is a non primitve data type in js


// These are seven primitives data types in js

// 1 : Number
// 2 : Null
// 3 : String
// 4 : Symbol
// 5 : Boolean
// 6 : undefined
// 7 : Bigint

let a = 89;
let b = null;
let c = 'Hamza';
let d = Symbol('Hey Iam a unique symbol');
let e = true;
let f = undefined;
let g = BigInt(90) + BigInt(10)

console.log(a,b,c,d,e,f,g);
console.log(typeof a, typeof b , typeof c, typeof d, typeof e, typeof f, typeof g)

// Primitive DataTypes Object;
// An Object in Javascript can be created as follows;

//  write a js programm to store name phone number and marks of student  using objects;

const studentDetails = {
    studentName : 'Hamza',
    studentNumber : 30940385,
    studentMarks : true
}
console.log(studentDetails['studentMarks'])
