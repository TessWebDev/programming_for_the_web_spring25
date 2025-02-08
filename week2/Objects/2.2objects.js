// objects (the games) in arrays
const gamesArray = [
    { game: 'Clue', numberOfPlayers: '3-6 ', rating:' 5/5 stars', gameDescription: 'The objective of the game is to determine who murdered the games victim, where the crime took place, and which weapon was used. Each player assumes the role of one of the six suspects and attempts to deduce the correct answer by strategically moving around a game board representing the rooms of a mansion and collecting clues about the circumstances of the murder from the other players.'},
    { game: 'Five Crowns', numberOfPlayers: '1-7 ', rating:' 4/5 stars', gameDescription: 'This is a card game. Players compete by trying to obtain the lowest number of points after playing all eleven hands of the game and making sets of "books and runs." The game ends when the eleventh round has concluded. The Game Isnt Over Til the Kings Go Wild!'},
    { game: 'Scattergories', numberOfPlayers: '2-6 ', rating:' 5/5 stars', gameDescription: 'The objective of the game is to score points by uniquely naming objects, people, actions, and so forth within a set of categories, given an initial letter, within a time limit.'},
];
console.log('index 0 of games description', gamesArray);

// prompt
let user = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");
console.log('user');

// input
user = Number(user);
console.log(user);

// message
window.alert("You selected " + gamesArray[user-1].game + ", which is a " + gamesArray[user-1].numberOfPlayers + " player game. " + gamesArray[user-1].gameDescription + gamesArray[user-1].rating );
console.log(user);
