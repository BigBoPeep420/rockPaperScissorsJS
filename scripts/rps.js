let humanScore = 0;
let computerScore = 0;
const gameInput = document.querySelector("#gameInput");
const gameInfo = document.querySelector("#gameInfo");

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
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function isValidInput(str){
    switch(str){
        case "rock":
            return true;
            break;
        case "paper":
            return true;
            break;
        case "scissors":
            return true;
            break;
        default:
            return false;
            break;
    }
}

gameInput.addEventListener('click', (e) => {
    if(isValidInput(e.target.id)){
        if(computerScore == 0 && humanScore == 0){
            gameInfo.querySelector("#user").classList.remove("loser", "winner");
            gameInfo.querySelector("#npc").classList.remove("loser", "winner");
        }
        let npc = getComputerChoice();
        let result = checkWinner(e.target.id, npc);
        if(result == "human"){
            humanScore++;
        }else if(result == "computer"){
            computerScore++;
        }
        gameInfo.querySelector("#user .selected").textContent = capitalize(e.target.id);
        gameInfo.querySelector("#npc .selected").textContent = capitalize(npc);
        gameInfo.querySelector("#user .score").textContent = humanScore;
        gameInfo.querySelector("#npc .score").textContent = computerScore;
        
        if(computerScore == 5 || humanScore == 5){
            if(computerScore > humanScore){
                gameInfo.querySelector("#user").classList.toggle("loser");
                gameInfo.querySelector("#npc").classList.toggle("winner");
            }else{
                gameInfo.querySelector("#user").classList.toggle("winner");
                gameInfo.querySelector("#npc").classList.toggle("loser");
            }
            computerScore = 0;
            humanScore = 0;
        }
    }
})