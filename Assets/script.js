//variables
//start page variables
let startButton = $('#start-btn');
let startContainer = $('.start-container');

//timer and highscore container variable
let topContainer = $('.top-container');

//timer variables
let timer = $('#timer');
let secondsLeft = 75;
var timerInterval;

//timer function
function setTime() {
        timerInterval = setInterval(function(){
        secondsLeft--;
        timer.text("Time Remaining: " + secondsLeft);

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

//question variables
let questionContainer = $('.question-container');
let questionEl = $('#question');
let answerButtons = $('#answer-btns');
let choiceListEl = $('.answers');

//highscores
let highscoreEl = $('#highscore');
let highscore = 0; 
highscoreEl.text('Score: ' + highscore);



//end page variables
let endPage = $('.highscore-page');
let endScore = $('#scoreLanding');
let saveButton = $('#saveScoreBtn');
let replayButton = $('#replayBtn');
let homeButton = $('#homeBtn');


//start game and timer
startButton.on('click', startGame);


function startGame() {
    console.log('Started');
    startContainer.addClass('hide');
    topContainer.removeClass('hide');
    questionContainer.removeClass('hide');
    index = 0;
    secondsLeft = 75;
    setTime();
    setNextQuestion(index);
}

//questions
let index = 0;
const questions = [
    {
        question: 'Commonly used data types do NOT include:',
        answers: [
            {text: 'strings', correct: false},
            {text: 'booleans', correct: false},
            {text: 'alerts', correct: true},
            {text: 'numbers', correct: false}
        ]
    },

    {
        question: 'Arrays in Javascript can be used to store:',
        answers: [
            {text: 'numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'all of the above', correct: true}
        ]
    },

    {
        question: 'The condition in an if/else is enclosed within:',
        answers: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'parentheses', correct: true},
            {text: 'square brackets', correct: true},
        ]
    },

    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'hyper trainer marking language', correct: false},
            {text: 'happy turtles munching lettuce', correct: false},
            {text: 'hyper text markup leveler', correct: false},
            {text: 'hyper text markup language', correct: true},
        ]
    }

];


function setNextQuestion(currentIndex){
    showQuestion(questions[currentIndex])
}

function showQuestion(questions) {
    console.log(questions)
    // target (where the data goes), action (what to do with the data), source of data
    questionEl.text(questions.question);
    let choices = document.body.querySelectorAll('.answers');
    // first declare iterator variable, the exit condition, functionality of iterator
    for(let i = 0; i < questions.answers.length; i++) {
        console.log(i);
        console.log(questions.answers[i]);
        choices[i].textContent = (questions.answers[i].text);
        choices[i].setAttribute('correct', questions.answers[i].correct);
    };
}

//select answers
choiceListEl.on("click", function(event) {
    // grab value of button
    let isCorrect = JSON.parse(event.target.getAttribute('correct'))
    // compare value to array's correct field
    if (isCorrect === true) {
        // if correct, add 10 points to high score
        highscore = highscore + 10;
        highscoreEl.text('Score: ' + highscore);
    } else {
        //if wrong, decrease time by 10 seconds
        secondsLeft = secondsLeft - 10;
        timer.text('Time Remaining: ' + secondsLeft);    
    }
    // create a condition to stop index from iterating
    // if end condition true, go to high score page
    // else iterate
    // go to next question

    if (index === 3){
        questionContainer.addClass('hide');
        topContainer.addClass('hide');
        endPage.removeClass('hide');
        endScore.text("Your Score: " + highscore);
        clearInterval(timerInterval);
        console.log(timerInterval);
    }

    else {
    index++
    setNextQuestion(index);
    }
})

//end page button listeners
//replay game
replayButton.on('click', startGame);
//return to home page
homeButton.on('click', function(){
    startContainer.removeClass('hide');
    topContainer.addClass('hide');
    questionContainer.addClass('hide');
    endPage.addClass('hide');
})

//save score
saveButton.on('click', saveHighScore());

//highscore list storage








