// console log rock, paper ,scissors    
// player enters string of one of the three
// computer chose one of the three 
// console log computer chose and player chose
// console log winner 


let humanChoice;
let computerChoice
let humanScore = 0;
let computerScore = 0;

let getHumanChoice = function(){

     humanChoice = prompt("choose rock, paper or scissors").toLowerCase();

    if(humanChoice == "scissors"){
        console.log(`player chose ${humanChoice}`)
    }
    else if (humanChoice == "rock"){
        console.log(`player chose ${humanChoice}`)   
    }
    else if (humanChoice == "paper"){
        console.log(`player chose ${humanChoice}`)   
    }
    else{
        console.log("you can't use that")
    }
}

let getComputerChoice = function(){

     computerChoice = Math.floor(Math.random() * 3)

    if(computerChoice == 0){
        console.log("computer chose rock")
    }
    else if(computerChoice == 1){
        console.log("computer chose paper")
    }
    else if(computerChoice == 2){
        console.log("computer chose scissors")
    }
}


 let playRound = function () {

    getHumanChoice()
    getComputerChoice()

    //scissors//

    if (humanChoice == "scissors" && computerChoice == 0) {
        console.log("LOSE!");
        ++computerScore;  
        humanScore;
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
        
    }
    else if (humanChoice == "scissors" && computerChoice == 1) {
        console.log("WIN!");
        computerScore; 
        ++humanScore;
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
    }
    else if (humanChoice == "scissors" && computerChoice == 2) {
        console.log("DRAW!");
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
    }

    //rock//

    else if (humanChoice == "rock" && computerChoice == 0) {
        console.log("DRAW!");
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
    }
    else if (humanChoice == "rock" && computerChoice == 1) {
        console.log("LOSE!");
        ++computerScore;  
        humanScore;
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
    }
    else if (humanChoice == "rock" && computerChoice == 2) {
        console.log("WIN!");
        computerScore; 
        ++humanScore;
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
    }

    //paper//

    else if (humanChoice == "paper" && computerChoice == 0) {
        console.log("WIN!");
        computerScore; 
        ++humanScore;
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
    }
    else if (humanChoice == "paper" && computerChoice == 1) {
        console.log("DRAW!");
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
    }
    else if (humanChoice == "paper" && computerChoice == 2) {
        console.log("LOSE!");
        ++computerScore;  
        humanScore;
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
        }

        //error//

   else{
    console.log("something went wrong")
   }
  
}

let playGame = function(){
    playRound()
    playRound()
    playRound()
    if(humanScore == computerScore){
        playRound()
        if(humanScore == computerScore){
            playRound()
            if(humanScore == computerScore){
                playRound()
                if(humanScore == computerScore){
                    playRound()
                    if(humanScore == computerScore){
                        playRound()
                        if(humanScore == computerScore){
                            playRound()
                        }
                    }
                }
            }
        }
    }
    else if(humanScore > computerScore){
        console.log("YOU WON THE GAME")
    }
    else if(humanScore < computerScore){
        console.log("YOU LOST THE GAME")
    }

}

playGame()


// if too many ties, game just ends for some reason, need to use a loop of sorts //
// find out how to work tiebreaker // 
// also find out how to use less if statements //
