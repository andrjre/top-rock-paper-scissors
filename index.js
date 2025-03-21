// console log rock, paper ,scissors    
// player enters string of one of the three
// computer chose one of the three 
// console log computer chose and player chose
// console log winner 

let numberChoice = Math.floor(Math.random() * 3)
let humanScore = 0;
let computerScore = 0;

let getHumanChoice = function(){
    let choice = prompt("enter your choice")
    if(choice == "scissors"){
        console.log(`player chose ${choice}`)
    }
    else if (choice == "rock"){
        console.log(`player chose ${choice}`)   
    }
    else if (choice == "paper"){
        console.log(`player chose ${choice}`)   
    }
    else{
        console.log("you can't use that")
    }
}

let getComputerChoice = function(){

    if(numberChoice == 0){
        console.log("computer chose rock")
    }
    else if(numberChoice == 1){
        console.log("computer chose paper")
    }
    else if(numberChoice == 2){
        console.log("computer chose scissors")
    }
}





function playRound (humanChoice , computerChoice ){
        
     if(humanChoice == rock){
        console.log("hello rock")
     }
       
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)



// idek what this function is supposed to be //

//step 5 // 
//put this code in front of the ccomputer choice //
