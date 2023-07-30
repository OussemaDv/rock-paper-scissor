function getComputerChoice(){
    choice = Math.floor(Math.random() * (4 - 1) + 1);
    if(choice === 1){
        return "rock";
    }
    else if(choice === 2){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return "tie";
        }
    else if(playerSelection==="rock"&&computerSelection==="paper"){
        return "computer";
        }
    else if(playerSelection==="rock"&&computerSelection==="scissor"){
        return "player";
        }
    else if(playerSelection==="paper"&&computerSelection==="rock"){
        return "player";
        }
    else if(playerSelection==="paper" && computerSelection==="scissor"){
        return "computer";
        }
    else if(playerSelection==="scissor"&&computerSelection==="rock"){
        return "computer";
        }
    else if(playerSelection==="scissor"&&computerSelection==="paper"){
        return "player";
        }
}

function game(){
    let computerScore=0,
        playerScore=0;
    let playerSelection,computerSelection;
    let winner;

    for(let i=0;i<5;i++){
    playerSelection = (prompt("Rock, paper, scissor ? ")).toLowerCase();
    computerSelection = getComputerChoice(); 
    winner = playRound(playerSelection,computerSelection);
    if(winner === "player"){
        playerScore++;
    }
    else if(winner === "computer"){
        computerScore++;
    }
    console.log(`Player: ${playerScore} || Computer: ${computerScore}`);
    }
    


    if(playerScore>computerScore){
        console.log("You win!");
    }
    else if(playerScore<computerScore){
        console.log("You lose!");
    }
    else{
        console.log("Tie!");
    }
}

game();