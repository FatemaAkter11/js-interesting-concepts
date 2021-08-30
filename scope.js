const favNum = 12; //global scope

function add(num1, num2) {
    console.log(mood); //hoisting
    const result = num1 + num2;
    // console.log(result); // local scope
    //console.log(favNum);//global scope
    if (result > 9) {
        // let mood = 'happy'; // block scope
        // mood = 'cranky'; // block scope
        var mood = 'happy'; // no block scope(hoisting)
        mood = 'cranky'; // no block scope(hoisting)
    }
    console.log(mood);
    return result;
}
const sum = add(11, 11);
// console.log(result);
//console.log(favNum);//global scope

// no var use
for (let i = 0; i < 10; i++) {

}
console.log(i);