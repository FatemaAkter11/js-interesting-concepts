/* 
Primitive data type => number, string ,boolean, undefined, null,symbol
Non-primitive data type => object
*/

//Primitive
let a = 'Hello';
let b = a;
// console.log(a, b);
a = 'Hi';
// console.log(a, b);

// Non-Primitive
const x = { job: 'Web developer' };
const y = x;
console.log(x, y);
// x.job = 'Front end developer';
y.job = 'Front end developer';
console.log(x, y);