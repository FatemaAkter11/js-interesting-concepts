/* 
Falsy: false , 0,''(empty string),undefined,null,NaN


Truthy: true, any number(positive or Negative),any string including single whitespace(' ', '0', 'false'),[](empty array),{}
(empty object)

*/

let x = parseInt('hello');
console.log('Value of x is', x);
if (x) {
    console.log('Variable is truthy');
}
else {
    console.log('Variable is falsy');
}