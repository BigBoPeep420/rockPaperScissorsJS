//Global Variables
let humanScore = 0;
let computerScore = 0;

//Return 'rock', 'paper', or 'scissors' randomly
function getComputerChoice(){
    let num = Math.floor((Math.random()*3)+1)
    switch(num){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "scissors";
            break;
    }
}

//Prompt user for input
//IF input is a number THEN RETURN 'rock', 'paper', or 'scissors'
//ELSE RETURN input     (We assume user input valid response)
function getHumanChoice(){
    let uc = prompt("Enter 1-3, or Rock, Paper, or Scissors");
    if(!isNaN(uc)){
        switch(parseInt(uc)){
            case 1:
                return "rock";
                break;
            case 2:
                return "paper";
                break;
            default:
                return "scissors";
                break;
        }
    }else{
        return uc;
    }
}

//Take two strings and convert to lower
//CALL checkWinner() and store result
//IF result == 'human' THEN human wins
//IF result == 'computer' THEN computer wins
//IF result == 'tie' THEN no one wins
//ELSE there was an invalid parameter in checkWinner() and no one wins
function playRound(hc, cc){
    hc = hc.toLowerCase();
    cc = cc.toLowerCase();
    result = checkWinner(hc, cc);
    switch (result) {
        case "human":
            humanScore++;
            console.log("You WIN! | Human: " + humanScore + "  Computer: " + computerScore);
            break;
        case "computer":
            computerScore++;
            console.log("You LOSE! | Human: " + humanScore + "  Computer: " + computerScore);
            break;
        case "tie":
            console.log("TIE! | Human: " + humanScore + "  Computer: " + computerScore);
            break;   
        default:
            console.log("INVALID GAME!");
            break;
    }
}

//Take two strings that contain 'rock', 'paper', or 'scissors'
//SWITCH on first parameter
//In each case, check against second parameter and return a result
function checkWinner(hc, cc){
    switch(hc){
        case "rock":
            if(cc == "rock"){
                return "tie";
            }else if(cc == "paper"){
                return "computer";
            }else{
                return "human";
            }
            break;
        case "paper":
            if(cc == "rock"){
                return "human";
            }else if(cc == "paper"){
                return "tie";
            }else{
                return "computer";
            }
            break;
        case "scissors":
            if(cc == "rock"){
                return "computer";
            }else if(cc == "paper"){
                return "human";
            }else{
                return "tie";
            }
            break;
        default:
            return "invalid";
    }
}

//Plays 5 rounds, prompting user for input each round with getHumanChoice()
//At the end declares the winner and resets the scores to 0
function playGame(){
    for (let rnds = 1; rnds < 6; rnds++) {
        let hc = getHumanChoice();
        let cc = getComputerChoice();

        playRound(hc, cc);

        if(rnds == 5){
            if(humanScore > computerScore){
                console.log("YOU WON THE GAME!!!");
            }else if(humanScore < computerScore){
                console.log("YOU LOST THE GAME :(");
            }else {
                console.log("IT WAS A TIE!");
            }

            humanScore = 0;
            computerScore = 0;
        }
    }
}