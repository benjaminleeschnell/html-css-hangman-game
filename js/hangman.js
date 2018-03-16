// Hangman 

var canvas,
    c,
    centerX,
    centerY; 

    canvas = document.getElementById("myCanvas");
    c = canvas.getContext("2d");
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    
    //noose
    function noose() {
        c.beginPath();
        c.moveTo(250,20);
        c.lineTo(250, 40);
        c.strokeStyle="#ffffff";
        c.stroke();

        c.beginPath();
        c.moveTo(245, 34);
        c.lineTo(255, 34);
        c.strokeStyle="#ffffff";
        c.stroke();

        c.beginPath();
        c.moveTo(245, 30);
        c.lineTo(255, 30);
        c.strokeStyle="#ffffff";
        c.stroke();

        c.beginPath();
        c.moveTo(245, 26);
        c.lineTo(255, 26);
        c.strokeStyle="#ffffff";
        c.stroke();
    }
    // noose();

    //hanger
    function hanger() {
        c.beginPath();
        c.moveTo(130,20);
        c.lineTo(340, 20);
        c.strokeStyle="#ffffff";
        c.stroke();
    }
   // hanger();

    //ground
    function ground() {
        c.beginPath();
        c.moveTo(150,175);
        c.lineTo(350, 175);
        c.strokeStyle="#ffffff";
        c.stroke();
    }
   // ground();

    //scaffold
    function scaffold() {
        c.beginPath();
        c.moveTo(150,175);
        c.lineTo(150, 10);
        c.strokeStyle="#ffffff";
        c.stroke();
    }
    // scaffold();


    //head
    function head() {
        c.beginPath();
        c.arc(centerX, centerY - 40, 20, 0, 2 * Math.PI, false);
        c.strokeStyle="#ffffff";
        c.stroke();
    }
    // head();

    //body
    function body() {
        c.beginPath();
        c.moveTo(centerX, centerY - 21)
        c.lineTo(250, 120);
        c.strokeStyle="#ffffff";
    c.stroke();
    }
    // body();

    //eys
    function eyes() {
        //left eye
        c.beginPath();
        c.moveTo(238, 52);
        c.lineTo(244, 56);
        c.strokeStyle="#ffffff";
        c.stroke();

        c.beginPath();
        c.moveTo(238, 56);
        c.lineTo(244, 52);
        c.strokeStyle="#ffffff";
        c.stroke();

        //right eye 
        c.beginPath();
        c.moveTo(254, 52);
        c.lineTo(260, 56);
        c.strokeStyle="#ffffff";
        c.stroke();

        //right eye 
        c.beginPath();
        c.moveTo(254, 56);
        c.lineTo(260, 52);
        c.strokeStyle="#ffffff";
        c.stroke();
    };
    // eyes();

    //mouth
    function mouth() {
        c.beginPath();
        c.moveTo(245, 70);
        c.lineTo(255, 70);
        c.strokeStyle="#ffffff";
        c.stroke();
    }
    // mouth();    

    //left arm
    function leftArm() {
        c.beginPath();
        c.moveTo(250, 105);
        c.lineTo(235, 95);
        c.strokeStyle="#ffffff";
        c.stroke();
    }


    //right arm
    function rightArm() {
        c.beginPath();
        c.moveTo(250, 105);
        c.lineTo(265, 95);
        c.strokeStyle="#ffffff";
        c.stroke();
    }

    //left leg
    function leftLeg() {
        c.beginPath();
        c.moveTo(250, 120);
        c.lineTo(235, 140);
        c.strokeStyle="#ffffff";
        c.stroke();
    }


    //right leg
    function rightLeg() {
        c.beginPath();
        c.moveTo(250, 120);
        c.lineTo(265, 140);
        c.strokeStyle="#ffffff";
        c.stroke();
    }
    // rightLeg();

    function gameOver() {
        document.write('<h3 style="text-align: center; padding-top: 200px; font-size: 3em;">Game over. <br>Refresh the page to play again.</h3>')
}

var hangmanParts = [ 
    ground,
    scaffold,
    hanger,
    noose,
    head,
    body,
    leftArm,
    rightArm,
    rightLeg,
    leftLeg,
    mouth,
    eyes,
    gameOver
]  


