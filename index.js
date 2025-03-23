// console log rock, paper ,scissors    
// player enters string of one of the three
// computer chose one of the three 
// console log computer chose and player chose
// console log winner 

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice

let getHumanChoice = function(){

     humanChoice = prompt("enter your choice")

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

    if (humanChoice == "scissors" && computerChoice == 0) {
        console.log("you lose!");
        computerScore = + 1;  
        humanScore = + 0;
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
    }
    else if (humanChoice == "scissors" && computerChoice == 1) {
        console.log("you win!");
        computerScore = + 0; 
        humanScore = + 1;
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
    }
    else if (humanChoice == "scissors" && computerChoice == 2) {
        console.log("draw!");
        computerScore = + 0; 
        humanScore = + 0;
        console.log(`computer: ${computerScore}`)
        console.log(`player: ${humanScore}`)
    }
    else if (humanChoice == "rock" && computerChoice == 0) {
        console.log("draw!");
    }
    else if (humanChoice == "rock" && computerChoice == 1) {
        console.log("you lose!");
    }
    else if (humanChoice == "rock" && computerChoice == 2) {
        console.log("you win!");
    }
    else if (humanChoice == "paper" && computerChoice == 0) {
        console.log("you win!");
    }
    else if (humanChoice == "paper" && computerChoice == 1) {
        console.log("draw!");
    }
    else if (humanChoice == "paper" && computerChoice == 2) {
        console.log("you lose!");
    }


   else{
    console.log("something went wrong")
   }
  
}

playRound()
playRound()

// find out a way to make scores carry over across rounds //
// also find out how to use less if statements //
// and to add increments and decrements // 
