// objects

// create
const tessCar = {
    color: 'black', // key = color, value = black, the semicolon : puts them together
    pistons: 4
};
console.log(tessCar);
// mutate: add data (properties)
tessCar.fuleInjection = true;
console.log(tessCar);
tessCar['4-wheel-drive'] = true;

// display single item with dot
console.log('tess car is', tessCar.color);
// display single item with array notation
console.log('is it 4 wheel dig?', tessCar['4-wheel-drive']);
// using toString (works with arrays too)
console.log(tessCar.toString());
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());
// mutate: remove property
delete tessCar.pistons;
console.log('tess car without pistons', tessCar);
//merg two objects
const basicJuke = {  //This is a template
    wheels: 4,
    color: 'red',
    doors: 4,
    make: 'Nissan'
};
const newJuke = Object.assign({}, basicJuke, tessCar);
console.log('new juke', newJuke);
// objects in arrays
const cars = [
    { make: 'Nissan', model: 'Rogue', color:'orange'},
    { make: 'Nissan', model: 'Altima', color:'blue'},
    { make: 'Dodge', model: 'Viper', color:'red'},
    { make: 'VW', model: 'Beetle', color:'pink'},
    { make: 'Chevy', model: 'Blazer', color:'black'},
    { make: 'Dodge', model: 'Charger', color:'green'},
];
console.log('index 0 of cars color', cars[0].color); //can be any property like "make"
const randomIdx = Math.round(Math.random() * cars.length - 1); // Math.random -- gives us a number between 0 and 1, cars.length -- gives us the total number of cars
console.log('My car is a ' + cars[randomIdx].make + ' ' + cars
[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);