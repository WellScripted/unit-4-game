// Crystal Javascript


//Variables

var targetScore = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;

var crystals = {
    one: {
        name: "C0ne",
        value: 0
    },

    two: {
        name: "CTwo",
        value: 0
    },

    three: {
        name: "CThree",
        value: 0
    },

    four: {
        name: "CFour",
        value: 0
    }


};

//Functions
//Random number generator
    var randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);

    };


// Start Game Function
    var startGame = function() {
        currentScore = 0;
        $("#current-score").html(currentScore); //Create div-id on index.html

        targetScore = randomNumber(19, 120);
        $("#target-score").html(targetScore);

        crystals.one.value = randomNumber(1, 12);
        crystals.two.value = randomNumber(1, 12);
        crystals.three.value = randomNumber(1, 12);
        crystals.four.value = randomNumber(1, 12);

        console.log("Target Score: ", targetScore);
        console.log("Crystal One: ", crystals.one.value);
        console.log("Crystal Two: ", crystals.two.value);
        console.log("Crystal Three: ", crystals.three.value);
        console.log("Crystal Four: ", crystals.four.value);
        console.log("--------------------");


    };

    startGame();
//Check Win Function
    var checkWin = function() {
    if (currentScore > targetScore) {
        //Code if they win
    } else if (currentScore === targetScore) {
        //Code if they win
    }
};

//GAME LOGIC - EVENT HANDLES
$('crystal.one').on('click', function() {
    currentScore = currentScore + crystals.one.value;
    $("#current-score").html(currentScore);
    checkWin(); //Slack Lindsey if stuck on creating check win function

});