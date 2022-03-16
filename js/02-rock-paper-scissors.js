// Rock, paper, scissors is a classic 2 player game. 
// Each player chooses rock, paper or scissors. The possible outcomes include:
// •	Rock destroys scissors.
// •	Scissors cut paper.
// •	Paper covers rock.

// Our code will break the game into 3 phases:

// 1.	User makes a choice. How will we collect the user’s choice?

// 2.	Computer makes a choice. How will we collect the computer’s choice?

// 3.	A conditional that determines who wins.

// You will be responsible for figuring out some of the logic. 
// These next steps will attempt to guide you down the right path: 

// 1.	Begin by prompting the user for their choice.

        var user = prompt("Select rock, scissors or paper.");
        if (user !== "rock" && user !== "paper"  && user !== "scissors") {
            alert("Enter only rock, paper or scissors.")
        }

// 2.	Create the computer’s choice. 
//      This will be generated similarly to the coin flip that you did in the last assignment. 
        // Remember though, rather than 2 options, there will be 3 here.
// 3.	Depending on what the numeric value of the computer’s choice is, 
//      reset it to a string value of rock, paper, or scissors instead.

        var computer = Math.random();
        if (computer < 0.34) {
            computer ="rock";
        }else if (computer <= 0.67) {
            computer = "paper";
        } else {
            computer = "scissors";
        }


// 4.	Create a conditional statement that checks the user’s choice in relation to the computer’s choice.
//      Once a winner is defined, display a message within an alert box indicating who the winner is.
if (user === computer) {
    alert("Tie!");
}

if (user === "paper") {
    if (computer === "rock") {
        alert("You chose paper, and paper wins over rock.");
    } else {
        alert("Computer chose scissors, and scissors wins over paper.");
    }
}

if (user === "rock") {
    if (computer === "scissors") {
        alert("You chose rock, and rock wins over scissors.");
    } else {
        alert("Computer chose paper, and paper wins over rock.");
    }
}

if (user === "scissors") {
    if (computer === "paper") {
        alert("You chose scissors, and scissors wins over paper.");
    } else {
        alert("Computer chose rock, and rock wins over scissors.");
    }
}

// 5.	What if the result ends in a tie? Figure out how to handle that as well.

// 6.	What if the user enters something other than rock, paper, or scissors into the prompt?
//      Figure out how to handle that as well.

