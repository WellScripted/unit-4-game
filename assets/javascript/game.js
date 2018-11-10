// Crystal Javascript


//Variables

var targetScore = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;

var crystals = {
    one: {
        name: "COne",
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
        currentScore = 0
        $("#current-score").html(currentScore); 

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
        alert("You're total loser!");    //alert user that they lost
        losses++;    //increment losses by one (using the ++ syntax)
        document.getElementById("losses").innerHTML = losses;     //update the html for losses
        startGame();
    } else if (currentScore === targetScore) {
        alert("You're a winner!"); // alert user that they won
        wins++; // increment wins by one (using the ++ syntax)
        document.getElementById("wins").innerHTML = wins; // update the html for wins
        startGame();
    }
    //
};

//GAME LOGIC - EVENT HANDLES
$("#crystal-one").on('click', function() {
    currentScore = currentScore + crystals.one.value;
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#current-score").html(currentScore);
    checkWin(); 

});

$("#crystal-two").on('click', function() {
    currentScore = currentScore + crystals.two.value;
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#current-score").html(currentScore);
    checkWin(); 

});

$("#crystal-three").on('click', function() {
    currentScore = currentScore + crystals.three.value;
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#current-score").html(currentScore);
    checkWin(); 

});

$("#crystal-four").on('click', function() {
    currentScore = currentScore + crystals.four.value;
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#current-score").html(currentScore);
    checkWin(); 

});