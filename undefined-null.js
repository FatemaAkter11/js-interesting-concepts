/**** Undefined*******/
//1.Variable value not assigned
let a;
//console.log(a);

//2. function but didn't write return anything
function first(a, b) {
    const sum = a + b;
}
const sumition = first(2, 1);
//console.log(sumition);

//3.Just wrote return but didn't return anything

function second(x, y) {
    const sum = x + y;
    return;
}
const addition = second(2, 1);
//console.log(addition);

// 4.parameter that isn't passed

function third(x, y) {
    const sum = x + 4;
    console.log(y);
    return sum;
}
//third(2);

//5.property that doesn't exist in an object

const fifth = { name: 'Asha', age: 19 };
//console.log(fifth.phone);

//6.Accessing array element out of range
const sixth = [5, 7, 9];
// console.log(sixth[5]);

//7.Accessing deleted array element
const seventh = [23, 56, 12];
delete seventh[2];
// console.log(seventh[2]);


//8.Explicity set value undefined
const eigth = undefined;
// console.log(eigth);


/**** Null ****/

const student = { name: 'rashed', profession: null };
console.log(student.profession);