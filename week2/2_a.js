

//questions
const questionsAndAnswer = [
        {
            question: 'Who played Herman Munster?',
            answer: 'Fred Gwynne'
        },
        {
            question: 'Who played the Frankensteins Monster in Young Frankenstein?',
            answer: 'Peter Boyle'
        },
        {
            question: 'Who played the orginal Frankenstein Monster?',
            answer: 'Boris Karloff'
        }
];
console.log('questionsAndAnswer', questionsAndAnswer);


//randomizing
console.log(Math.floor(Math.random() * 3));
const randomNumber = Math.floor(Math.random() * questionsAndAnswer.length);

const answer = window.prompt(questionsAndAnswer[randomNumber].question);
window.alert("You answered " + answer + "." + " The correct answer was " + questionsAndAnswer[randomNumber].answer + ".");
