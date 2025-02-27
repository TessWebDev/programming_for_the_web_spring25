// //Fn construction .. fn is short for function

// // function sayHI(){
// //     window.alert('Hi, Tess')
// //     console.log('Hello');
// //     console.log('your name is ');
// // }

// // //calling a fn
// // sayHI(); // THIS CALLS THE FUNCTION ... It shows up in the window server

// /////

// //variable and functions
// function sayHi(){
//     const name = 'Tess';
//     console.log('Hello');
//     console.log('your name is ' + name);
// }
// sayHi();

// //definition of function
// function add2Numbers(num1, num2){
//     console.log(num1 + num2);
// }
// //call
// add2Numbers(4, 6);
// add2Numbers(11, 6);
// function carSpecs(carObj) {
//     console.log('your car is', carObj.color)
//     console.log('it has' + carObj.tires + 'tires');
// }
// carSpecs({color:'red', tires: 4})

// //returning data from a funtion (and pure funtions)

// function add2Numbers(num1, num2) {
//     console.log(num1 + num2);
//     //return
//     return num1 + num2
// }
// const newNumber = add2Numbers(10, 16);
// const otherNumber = add2Numbers (7, 14);
// console.log('new number', newNumber)

function chooseRandomArrayItem(inputArray) {
    const randIndex = Math.floor(Math.random() * inputArray.length);
    return inputArray[randomIndex];
}
const names = ["tess", "ken", "tim", "macy"];
console.log(chooseRandomArrayItem(names));

//console.log(chooseRadomArrayItem(names))
const colors = ['red', 'purple', 'green'];
console.log(chooseRandomArrayItem(colors))

//declarative uses funtion keyword
//other ways to create a function
//note: no "this"
//fat arrow => EXAMPLE: const myCoolFunction = function () => {
    // console.log('espression fun')
// }

// OR fat arrow likes this: const myCoolFunction =  (myArg) => {
    // console.log('espression fun' myArg)
// }

// myCoolFunction();
// const myCoolFunction = function () {
//     console.log('espression fun')
// }
// myCoolFunction();

//LOOPING
const cars = ['Honda', 'Ford', 'Chevy', 'Kia'];
//iterations and data types that support it
//array loops
//for loop
for (let loopVar = 0; loopVar < cars.length; 
    loopVar = loopvar ++) {
        console.log('I dont have a ', cars[loopVar]);
    }

//     //OBJECT LOOPS
//    //for in
//     //*THIS IS THE OBJECT *//
//     const myObj = {
//        brand: 'Audi',
//        model: 'Quatro',
//         color:'blue',
//     }
//     for(let prop in myObj) {
//         console.log('prop is', prop);
//         console.log('vaule is', myObj[prop]);
//     }


//     //while loops with conditions
//     let myNumber = 0;
//     while(myNumber < 10) {
//         console.log('my nummber', myNumber);
//         myNumber + = 5;
//     }

    //applying learnings -- loops in p5

    // let starting = 0;
    // let width = 100;
    // let height = 100;
    // let space = 25;

    // function setup() {
    //     createCanvas(600, 600);
    //     background(0)
    // }
    // function draw() {
    //     noLoop();
    //     fill(255)
    //     for(let i = 0; i < 5; i++) {
    //         Rect (startingX, 200)
    //     }
    // }