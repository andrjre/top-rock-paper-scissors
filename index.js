// console log rock, paper ,scissors    
// player enters string of one of the three
// computer chose one of the three 
// console log computer chose and player chose
// console log winner 

let computerChoice = Math.floor(Math.random() * 3)
let humanScore = 0;
let computerScore = 0;

let getHumanChoice = function(){

    let humanChoice = prompt("enter your choice")

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

 getHumanChoice()
 getComputerChoice()


function playRound() {

    if (humanChoice == "scissors") {
        console.log("hi");
    }

}




// idek what this function is supposed to be //

//step 5 // 
//put this code in front of the ccomputer choice //
