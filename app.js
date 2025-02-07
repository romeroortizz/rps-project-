//array of choices
const gameChoices = ["rock", "paper", "scissors"];

//Players score variables

let humanScore = 0;
let computerScore = 0;

//get human input from options: rock paper or scissors
function getHumanChoice() {
    let userInput = prompt("Please enter an option rock, paper, or scissors").toLowerCase()
    return userInput
    
}
//generate random choice between rock, paper and scissors
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameChoices.length)

    return gameChoices[randomIndex]
}
   
function playRound(humanChoice, computerChoice) {
            //condition to win against computer
    
    if (humanChoice == "rock" && computerChoice == "scissors") {
                humanScore++
                return "You win this round!"
                
    } else if (humanChoice == "paper" && computerChoice == "rock") {
                humanScore++
                return "You win this round!"
               
     } else if (humanChoice == "scissors" && computerChoice == "paper") {
                humanScore++
                return "You win this round!"
                
            //conditions to lose against computer
    } else if (humanChoice == "rock" && computerChoice == "paper") {
                computerScore++
                return "You lost this round!"
                
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
                computerScore++
                return "You lost this round!"
                          
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
                computerScore++
                return "You lost this round!"
  
              //conditions to tie against computer  
            } else if (humanChoice === computerChoice) {
                return "Tie!"
            } else {
                return "Please only enter Rock Paper Or Scissors"
            }
    
            
        
}

function playGame() {
    for (let i = 0; i < 5; i++){
        let round = i;
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
   
        console.log(`Round ${round + 1} `)
        console.log(playRound(humanSelection, computerSelection))

        console.log(`Current score: Human ${humanScore} - Computer ${computerScore} `)

        if (humanScore > computerScore) {
            console.log("You win this game")
            console.log(`Your score: ${humanScore} `)
            console.log(`Computer score: ${computerScore} `)
        } else if (humanScore < computerScore) {
            console.log("You lost this game")
            console.log(`Your score: ${humanScore} `)
            console.log(`Computer score: ${computerScore} `)
        }    
    } 
}
playGame()

   
