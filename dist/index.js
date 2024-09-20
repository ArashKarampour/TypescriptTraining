"use strict";
// run : npx tsc , to compile all .ts files (run it where tsconfig.json is present and it'll apply everything based on the configuration in it.)
// see also: https://www.youtube.com/watch?v=BCg4U1FzODs and https://www.w3schools.com/typescript/typescript_getstarted.phpm/watch?v=BCg4U1FzODs and https://www.w3schools.com/typescript/typescript_getstarted.php
// let id: number = 45;
// console.log('ID', id);
// type infering : the typescript guesses the type based on the first assignment and will stick to it.
// let myname = 'arash'
// myname = 53 // here we'll get an error
// with type any it'll not complain if we reassign the variable with another type because with any we're kind of disabling the typescript typing
// let single: any = true;
// single = 'yes'
// Difference between type any and unknown:
// with type any we can execute any method on the variable that exists on the real type but with unknown have to first cast the variable to the correct type and then we can execute methods on that type
// see also https://www.w3schools.com/typescript/typescript_casting.php for casting
// let x: unknown = 'hello';
// console.log((x as string).length); // with unknown we have to first cast the variable to the right type
// with any:
// let y: any = 'bye'
// console.log(y.length); // this is possible with any but not with unknown.
// with any we're actually ignoring the types in typescript so we can change the value of the varable to another value that has another type 
// y = 5
// console.log(y);
//Arrays type:
// const arr : string[] = []
// arr.push("heyy!")
// arr.push(3) // here we get an error because we have definde the array with the type string but we are now pushing a number in it.
// const arr2 : number[] = []
// arr2.push(4)
// arr2.push('sdf') 
// preventing the arrays from being changed 
// const names : readonly string[] = ['Arash']
//names.push('Karampour') // here we get an error because push will change the names array and with readonly we cannot push to the array.
// the type const is in javascript and it's for the varaibles it means that we can not assign new things to the variable but readonly is in typescript and it means only what we define in first place is acceptable and the value of the array for example also can not be changes
// see type inference in arrays here :https://www.w3schools.com/typescript/typescript_arrays.php:
// it means it we define an array with intial values of a type the type of that array will be infered to that type.
// const numbers = [1,2,3] // because the values are all of type number the array will be infered to type number[]
// numbers.push(4) // no errors
// numbers.push('f') // here we get an error because the type of the array was infered to the type number[] but we are pushing an string to the array
// we can also use type any on the arrays (values inside the array are of type any)
// const anything : any[] = []
// const anything = [1,'d'] // also implicitly it'll be infered to any here
// anything.push(1);
// anything.push('haha');
// using arrays with values of type unknown:
// const anything : unknown[] = []
// anything.push(1)
// anything.push('haha')
// console.log((anything[1] as string).length)
// using mixed types:
// const scores : (string | number)[] = []
// scores.push(1)
// scores.push('high')
// (important) see tuples in javascript: https://ntgard.medium.com/tuples-in-javascript-cd33321e5277 and also in learn.js or also: https://www.w3schools.com/react/react_es6_destructuring.asp
// tuples(type) in typescript: see also https://www.w3schools.com/typescript/typescript_tuples.php
// const readOnlyTuple : readonly [string,string,number] = ['arash','karampour',77]
// the order and types are important in this kind of arrays (tupled type array)
//Named tuples: allow us to provide context for our values at each index.(but doesn't do anything just for showcase purpose)
// const graph : [x: number , y: number] = [3,4]
// const [xx,yy] = graph
// console.log(xx,yy);
// Object Types:
//see also https://www.w3schools.com/typescript/typescript_object_types.php
// const car : {model: string, year: number, type: string} = {
//     type: 'Toyota',
//     model: 'Corolla',
//     year: 2009
// }
// console.log(car);
// we have also the type inference in objects of the typescript:
// for example if we write the objects and the model with the string the type of the model will be string (it'll be infered to string):
// const car = { model: "corolla" }
// car.model = 'Ford' // it's also ok and can be changed because the type of the model is string and here we're also changin the type with the string
// console.log(car);
//car.model = 2 // here we'll get an error becuase the number is not assignable to the type string
// optional properties in objects:
// what is the difference?
// const car : { model: string, mileage: number} = { model: 'Lambo'} // here we get an error because the mileage is required but only model is provided
// const car : { model: string, mileage? : number } = { model: 'Lambo'} // here it'll be ok because mileage is an optional object field
// car.mileage = 234
// index signature: Index signatures can be used for objects without a defined list of properties.
// const nameAgeMap : { [unknownIndexName: string]: number} = {}
// nameAgeMap.arash = 25
// Type aliases and Interfaces (important):
// see: https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
//TypeScript allows types to be defined separately from the variables that use them.
//Aliases and Interfaces allows types to be easily shared between different variables/objects.
//Type aliases:
// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
// type CarYear = number
// type CarType = string
// type CarModel = string
// type Car = { year : CarYear, type : CarType , model: CarModel}
// const carYear : CarYear = 1998
// const carType : CarType = 'BMW'
// const carModel : CarModel = 'X1'
// const car1 : Car = {
//     year : carYear , type: carType, model: carModel 
// }
// const car2 : Car = {
//     year : carYear , type: carType+'2', model: carModel+'2' 
// }
// const carArr : Car[] = []
// carArr.push(car1)
// carArr.push(car2)
// console.log(carArr);
// Interfaces:
// Interfaces are similar to type aliases, except they only apply to object types.
// like type Car above for objects except we don't have the equal sign for the interface
// example1:
// interface Rectangle {
//     height? : number,
//     width: number
// }
// const rectangle : Rectangle = {
//     // height : 34,
//     width: 24
// }
// // rectangle.height = 34 // it's optional
// console.log(rectangle);
// example2:
// interface Car {
//     model: string,
//     year? : number,
//     name : string
// }
// const car : Car = { model: 'X3' , name: 'Porsh' }
// console.log(car);
// extending interfaces (like class's inhertance) but it's just for types in typescript to add more types for objects (property and it's type):
// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
// interface Rectangle {
//     height: number,
//     width: number
// }
// interface ColorRectangle extends Rectangle {
//     color : string
// }
// const colorRectangle : ColorRectangle = {
//     height: 23,
//     width: 34,
//     color: 'red'
// }
// console.log(colorRectangle);
// note that if we define more properties for a interface type that doesn't exist on this type of interface then we'll get an error
// for example here if we define type of colorRectangle as Rectangle instead of ColorRectangle we'll get an error because color doesn't exist on this interface(type) 
// const colorRectangle : Rectangle = {
//     height: 23,
//     width: 34,
//     color: 'red'
// }
