
//variables
//let for variables that will change
// let myName="Tess"; // defined -- Tess is the value,  variable = myName
// myName = "Tess"; //reassigned

// const lastName="Doyle"; //const for vars that don't change
// lastName = "Dude";

//third and oldest way
// var oldSchoolVariable = "Howdy"; // don't use unless you need to

//commands ahve at least two parts -- the command itself
// and the parentheses that accept any sort of information
// console.log(oldSchoolVariable + " " + myName); // concatenation
// console.log(`$({oldschoolVariable})`); //template string
// string -- characters between quotes

//number - simply numbers
// let myNumber = 16;
// console.log(myNumber + 8);
// let amIFunny = false;
// console.log(amIfunny + myNumber); // this came out a number
// console.log(myName + myNumber);
//boolean - true or false;
//chrome console -- command + option + j on mac
// pc chrome console -- f12
//condidtions
//if condidtion
//keyword "if" + parentheses with condition + curly brackets with what
//to do if it is true
//three equal signs is strict equal - same value, same data type
//two equal signs is loose equal - calculte to same value - don't use
// if(myNumber === 16) {
    // console.log("it is 16");
// }
// if(myNumber > 10) {
//     console.log("bigger than 10")
// } else {
//     console.log("bigger than 10")
// }

 const favColor = window.prompt("what is your favorite color?");
 if(favColor !== "black") {
     window.alert("too bad, mine is black");
 } else {
     window.alert("black is the coolest");
 }

 let circleX = 0;
 let myColor = window.prompt("what color?");
 let speed = Number(window.prompt("how fast - 1 to 10"));
 function setup() {
     createCanvas(400, 400);
 }

 function draw(circleX) {
     background(220);
     fill("purple")
     circleX(circleX, 200, 50);
     if(circleX < 400) {
         circleX = circleX + 10;
     } else {
         circleX = 0
     }
 }