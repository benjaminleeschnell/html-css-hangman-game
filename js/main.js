var correctAnswers = 0;
var question;
var hint;
var answer;
var response;
var score;
var questionNumber = 0;
var counter = 0;
const form = document.querySelector('form');
var answerInput = document.getElementById('answer');
var sumbitAnswer = document.getElementById('sumbitAnswer');
var questionTitle = document.getElementById('questionTitle');
var questionParagraph = document.getElementById("question");
var hintParagraph = document.getElementById("hint");
var myCanvas = document.getElementById('myCanvas');
var incorrectAnswer = document.getElementById('incorrectAnswer');
var website = document.getElementById('website'); 

function startGameBoard() {
    var startButton = document.getElementById('startButton');
    startButton.parentNode.removeChild(startButton);
    answerInput.classList.remove('display-none');
    submitAnswer.classList.remove('display-none');
    questionTitle.classList.remove('display-none');
}

function youWon() {
    document.write('<h3 style="text-align: center; padding-top: 200px; font-size: 3em;">Congratulations, you won! <br>Refresh the page to play again.</h3>')
}

function getQuestion() {
        title = questions[questionNumber].title;
        question = questions[questionNumber].question;
        hint = questions[questionNumber].hint;
        answer = questions[questionNumber].answer;
        questionTitle.innerHTML = title;
        questionParagraph.innerHTML = question;
        hintParagraph.innerHTML = hint;
        questionNumber++;
}

function getHangmanPart() {
    hangmanParts[counter]();
    counter++;
}

function correctAudio() {
    var audio = new Audio('audio/correct.wav');
    audio.load();
    audio.play();
}

function incorrectAudio() {
    var audio = new Audio('audio/incorrect.wav');
    audio.load();
    audio.play();
}

function correct() {
    responseText.innerText = '';
    incorrectAnswer.classList.add('display-none');
    correctAudio();
}

function incorrect() {
    incorrectAnswer.classList.remove('display-none');
    responseText.innerText = response;
        myCanvas.classList.remove('display-none');
        getHangmanPart();
        incorrectAudio();
}

form.addEventListener('submit', (e) => {
e.preventDefault();
text = answerInput.value;
console.log(text);
answerInput.textContent = "";
answerInput.value = '';
response = text;
    if (response === answer) {
        correct();
        if (questions[questionNumber] !== undefined) {
            getQuestion();  
        }
        else {
            youWon();
        }
    }
    else {
        incorrect();
    }
});





// for (var i = 0; i < questions.length; i += 1) {
//     question = questions[i].question;
//     answer = questions[i].answer;
// };





