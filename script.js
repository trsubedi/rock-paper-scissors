var userChoice = prompt("Do you choose rock, paper or scissors?");
while (userChoice !=="rock" && userChoice !=="paper" && userChoice !=="scissors"){
 confirm(userChoice + " isn't rock, paper or scissors. How about you try again?");
 userChoice = prompt("Do you choose rock, paper or scissors?");
}
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
}
    else if(computerChoice <= 0.67) {
    computerChoice = "paper";
    }
    else {
    computerChoice = "scissors";
    }
console.log("You Chose:  "+userChoice);
console.log("The Computer Chose:  "+computerChoice);
var compare = function (choice1,choice2){
    if (choice1 === choice2){
        return "The result is a tie!";
    }

if (choice1 === "rock"){
     if  (choice2 === "paper"){
        return "Paper wins";
    }
     if (choice2 === "scissors") {
        return "Rock wins";
    }
}
if (choice1 === "paper"){
     if (choice2 === "scissors"){
        return "Scissors wins!";
    }
     if (choice2 === "rock"){
        return "Paper wins!";
        }
}
if (choice1 === "scissors"){
     if (choice2 === "rock"){
        return "Rock wins!";
    }
     if (choice2 === "paper"){
    return "Scissors wins!";
    }
}
};
compare(userChoice,computerChoice);