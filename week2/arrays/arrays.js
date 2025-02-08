// variables but has multiple slots
const myArr = ['bob', 'betty', 'sue'];
console.log(myArr);
const myOtherArray = new Array();
myOtherArray.push('star wars'); // add items to end of array
myOtherArray.push('raiders of the lost ark');
// myArr.pop(); //removes last item of array....Pop is a method
// myArr.shift(); //removes first item of array
myArr.unshift('james'); //adds item to very beginning of array

console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]); //read single item
console.log(myArr[1]); //
console.log(myArr.indexOf('betty'));
const bettyIdx = myArr.indexOf('betty');
console.log(bettyIdx);
console.log(myArr[bettyIdx]); // if not found -1, if found real index number
if(bettyIdx > -1) {
    console.log(myArr[bettyIdx]);
}
myArr.splice(bettyIdx, 0, 'robert'); //These are mutations
console.log(myArr);

console.log(myArr.length);      //** PROPERTIES: console = object , log = property of the console object */
// Math.random() for random 0 and 1
// Math.round(n) rounds to the nearest whole number
// myArr.length - 1 to get the last index number of an array
const randomNumber = Math.round(Math.random() * (myArr.length - 1));
console.log(myArr[randomNumber]);
