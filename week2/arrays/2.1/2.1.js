//favorite movies
const myArr = ['The Birds', 'Detroit Rock City', 'Susperia', 'The Night of the Hunter', 'Young Frankenstein',];
console.log(myArr);
const myOtherArray = new Array(); //can add number in () to make more arrays
 
//prompt to ask
const myName = window.prompt("What is your favorite movie?"); //varible -- movie choice -- bucket
        if(myName !== "The Birds") {
        window.alert("I'll have to check it out!"); 
        myOtherArray.push(myName);
        } else {
        window.alert("That's one of mine too!"); //If answered The Birds
        
        }
console.log(myOtherArray);

//finished


