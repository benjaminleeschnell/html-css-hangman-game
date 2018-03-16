// Hangman 
/*
var canvas,
    c,
    centerX,
    centerY; 

window.onload = function() {
    canvas = document.getElementById("myCanvas");
    c = canvas.getContext("2d");
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    
    //noose
    function noose() {
        c.beginPath();
        c.moveTo(250,20);
        c.lineTo(250, 40);
        c.stroke();

        c.beginPath();
        c.moveTo(245, 34);
        c.lineTo(255, 34);
        c.stroke();

        c.beginPath();
        c.moveTo(245, 30);
        c.lineTo(255, 30);
        c.stroke();

        c.beginPath();
        c.moveTo(245, 26);
        c.lineTo(255, 26);
        c.stroke();
    }
    noose();

    //hanger
    function hanger() {
        c.beginPath();
        c.moveTo(130,20);
        c.lineTo(340, 20);
        c.stroke();
    }
    hanger();

    //ground
    function ground() {
        c.beginPath();
        c.moveTo(150,175);
        c.lineTo(350, 175);
        c.stroke();
    }
    ground();

    //scaffold
    function scaffold() {
        c.beginPath();
        c.moveTo(150,175);
        c.lineTo(150, 10);
        c.stroke();
    }
    scaffold();


    //head
    function head() {
        c.beginPath();
        c.arc(centerX, centerY - 40, 20, 0, 2 * Math.PI, false);
        c.stroke();
    }
    head();

    //body
    function body() {
        c.beginPath();
        c.moveTo(centerX, centerY - 21)
        c.lineTo(250, 120);
        c.stroke();
    }
    body();

    //eys
    function eyes() {
        //left eye
        c.beginPath();
        c.moveTo(238, 52);
        c.lineTo(244, 56);
        c.stroke();

        c.beginPath();
        c.moveTo(238, 56);
        c.lineTo(244, 52);
        c.stroke();

        //right eye 
        c.beginPath();
        c.moveTo(254, 52);
        c.lineTo(260, 56);
        c.stroke();

        //right eye 
        c.beginPath();
        c.moveTo(254, 56);
        c.lineTo(260, 52);
        c.stroke();
    };
    eyes();

    //mouth
    function mouth() {
        c.beginPath();
        c.moveTo(245, 70);
        c.lineTo(255, 70);
        c.stroke();
    }
    mouth();    

    //left arm
    function leftArm() {
        c.beginPath();
        c.moveTo(250, 105);
        c.lineTo(235, 95);
        c.stroke();
    }
    leftArm();

    //right arm
    function rightArm() {
        c.beginPath();
        c.moveTo(250, 105);
        c.lineTo(265, 95);
        c.stroke();
    }
    rightArm();

    //left leg
    function leftLeg() {
        c.beginPath();
        c.moveTo(250, 120);
        c.lineTo(235, 140);
        c.stroke();
    }
    leftLeg();


    //right leg
    function rightLeg() {
        c.beginPath();
        c.moveTo(250, 120);
        c.lineTo(265, 140);
        c.stroke();
    }
    rightLeg();
}
*/

var correctAnswers = 0;
var question;
var answer;
var response;
var score;

const form = document.querySelector


for (var i = 0, i < questions.length; i += 1) {
    question = questions.[i].question;
    answer = questions.[i].answer;
    const input = document.createElement('input');
    form.appendChild(input);
    
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    text = input.value;
    input.textContent = "";
    input.value = '';
    response = text;
    if (response === answer) {
        correctAnswers += 1;
    }
    var score = correctAnswers * 25;
    console.log(score);
}

/*
// question-section

const section = document.getElementById('question-section');

//website
const result = document.getElementById('website');
const scoreArea = document.getElementById('scoreArea');
var score = 0;

//incorrect
function incorrect() {
    result.innerHTML = '<p>That is incorrect, please try again</p>';
    if (score > 0) {
        score -= 25;
    }
    else {
        score = 0;
    }
    scoreArea.innerHTML = 'Uh oh, your score is now ' + score;
}

// correct 
function correct() {
    result.innerHTML = answer;
    score += 25;
    scoreArea.innerHTML = 'Correct, your score is ' + score;
    nextSlide();
}

// last
function last() {
    result.innerHTML += answer;
    score += 25;
    section.innerHTML = '<p>Great job, you\'ve finished the game with a score of ' + score + '!</p>';
    scoreArea.innerHTML = '';
}

// Question 1
const question1 = document.getElementById('question1');
const input = question1.querySelector('input');

question1.addEventListener('submit', (e) => {
    e.preventDefault();
    answer = input.value;
    input.value = '';
    if (answer === answers[0]) {
        correct();
    }
     else {
        incorrect();
    };
});
//end Question 1

//Question 2

// const question2 = document.getElementById('question2');
//const answer2 = question2.querySelector('input');

question2.addEventListener('submit', (e) => {
    e.preventDefault();
    answer = answer2.value;
    answer2.value = '';
    if (answer === answers[1]) {
        last();
    }
    
    else {
        incorrect();
    };
});
*/


