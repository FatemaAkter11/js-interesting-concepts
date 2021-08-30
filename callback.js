function welcomeMesseage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
// const names = ['Alam tom', 'Arif tom'];
// const myObj = { name: 'Shakib Tom', age: 2 };
function greetMoring(name) {
    console.log('Good Morning', name);
}
function greetNight(name) {
    console.log('Good Night', name);
}
welcomeMesseage('Tom Hanks', greetMoring);
welcomeMesseage('Tom & Jerry', greetNight);