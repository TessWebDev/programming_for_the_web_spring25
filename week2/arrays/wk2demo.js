/** to comment out */

const name= "Tess"; // string -- const= variables you don't want to change
let age = 21; //number  --- let= variables you want to change
const isLying = true; //boolean  ----var old method for scope 

// New DataTypes - Arrays and Objects

//Arrays -- will be quized

let cars = ["Honda", "hyndai", "Ford", "Chevy"];           // [ items in an array go into square brackets ] This line, the items in "" are a string
let luckyNumbers = [7, 13, 22];
let comboArray = [7, "Honda", true];
let myOtherArray = new Array();


//how to access data in arrays
console.log("a single car", cars[2]);
//list the var name and then the index
//index start at 0 for the first item

//how to manipulate data in arrays
//push to add to the end
cars.push("Kia");
console.log("cars", cars);

//pop to remove last item
//pop will return the removed item
const lastItem = cars.pop();
console.log("after pop", cars);
console.log("last item", lastItem);

//shift removes first element and returns it
const firstItem = cars.shift();
console.log("cars after shirt", cars, firstItem);

//length will return the number of items in the array
console.log("I have" + cars.length + "cars");
//trick - array.length minus 1 will access last item
console.log(cars[cars.length -1]); // trick to get last array item
//slice
cars.slice(1);
const subArray = cars.slice(1, 3);
console.log("cars after slice", subArray);

//splice
cars.push("Fiat");
cars.push("Jeep");
cars.push("Chrysler");
console.log("cars before splice", cars);
cars.splice(-1, 1);
console.log("cars after splice", cars);

//function methods that will talk about when we learn about functions
//map, find, filter

//Objects!

//How to make them  --- You are creating things with descriptors. What is it? PROPERTIES THAT HAVE SOMETHING IN COMMON.
const myObject = {
    color: "red", //color is the property, red is the value
    wheels: 4
    engine: "gas",
    bodyType: "sedan",
    make: "Honda",
    model: "Accord"
};
const myClass = {
    language: "Javascript",
    college: "MCAD",
    meetingNight: "Tuesday",
    students: [
        "Brian",
        "Tess",
    ]
}

//Properties
myClass.meetingNight = "Tuesday";
myClass["language"] = "Typescript";
myClass.students.push("Arden");
console.log("my Class", myClass);

//deleting a property
delete myClass.language;
console.log("my class after delete", myClass);

//making an array of objects
const question = [
    {
        question: "what is a bird",
        answer: "an animal that flys"
    },
    {
        question: "Where is north?",
        answer: "up",
    },
    {
        question: "How do you make green?",
        answer: "Mix blue and yellow",
    }
];
console.log("2nd question", questionAndAnswers[1].question);
const northQuestion = window.prompt(questionAndAnswers[1].question);
console.log("north question", northQuestion)
if(northQuestion === questionAndAnswers[1].answer) {

}