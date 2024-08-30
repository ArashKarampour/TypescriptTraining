"use strict";
// run : npx tsc , to compile all .ts files (run it where tsconfig.json is present and it'll apply everything based on the configuration in it.)
// see also: https://www.youtube.com/watch?v=BCg4U1FzODs and https://www.w3schools.com/typescript/typescript_getstarted.phpm/watch?v=BCg4U1FzODs and https://www.w3schools.com/typescript/typescript_getstarted.php
let id = 45;
console.log('ID', id);
// type infering : the typescript guesses the type based on the first assignment and will stick to it.
let myname = 'arash';
// myname = 53 // here we'll get an error
// with type any it'll not complain if we reassign the variable with another type because with any we're kind of disabling the typescript typing
let single = true;
single = 'yes';
// Difference between type any and unknown:
// with type any we can execute any method on the variable that exists on the real type but with unknown have to first cast the variable to the correct type and then we can execute methods on that type
// see also https://www.w3schools.com/typescript/typescript_casting.php for casting
let x = 'hello';
console.log(x.length); // with unknown we have to first cast the variable to the right type
// with any:
let y = 'bye';
console.log(y.length); // this is possible with any but not with unknown.
// with any we're actually ignoring the types in typescript so we can change the value of the varable to another value that has another type 
y = 5;
console.log(y);
//Arrays type:
const arr = [];
arr.push("heyy!");
// arr.push(3) // here we get an error because we have definde the array with the type string but we are now pushing a number in it.
const arr2 = [];
arr2.push(4);
// arr2.push('sdf') 
// preventing the arrays from being changed 
const names = ['Arash'];
//names.push('Karampour') // here we get an error because push will change the names array and with readonly we cannot push to the array.
// the type const is in javascript and it's for the varaibles it means that we can not assign new things to the variable but readonly is in typescript and it means only what we define in first place is acceptable and the value of the array for example also can not be changes
// see type inference in arrays here :https://www.w3schools.com/typescript/typescript_arrays.php:
// it means it we define an array with intial values of a type the type of that array will be infered to that type.
const numbers = [1, 2, 3]; // because the values are all of type number the array will be infered to type number[]
numbers.push(4); // no errors
// numbers.push('f') // here we get an error because the type of the array was infered to the type number[] but we are pushing an string to the array
// we can also use type any on the arrays
// const anything : any = []
// const anything = [1,'d'] // also implicitly it'll be infered to any here
const anything = [];
anything.push(1);
anything.push('haha');
