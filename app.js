//array of choices
const gameChoices = ["rock", "paper", "scissors"];
// dom elements
let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
const options = document.querySelector('.options')
const humanOutcome = document.querySelector('.human-choice')
const computerOutcome = document.querySelector('.computer-choice')

const humanPoints = document.querySelector(".human-score")
const computerPoints = document.querySelector(".computer-score")
const winStatus = document.querySelector('.win-status')
const outcome = document.querySelector('.outcome')

const playbtn = document.querySelector('.play')
const modal = document.querySelector('.modal')

//Players score variables
let start = false;
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

//generate random choice between rock, paper and scissors
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameChoices.length)

    return gameChoices[randomIndex]
}


function playRound(humanChoice) {
  
   
        rounds++;
        let start = true;
        const computerChoice = getComputerChoice();
    
        //show choices selected
    
        humanOutcome.textContent = humanChoice;
        computerOutcome.textContent = computerChoice;
        winStatus.textContent = `Round:${rounds}`
        // outcome.textContent = `Y
        //determine outcome of each round
    
        if (computerChoice === humanChoice) {
            outcome.textContent = `Tie Round`
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
    
        ) {
            humanScore++;
            humanPoints.textContent = `Score: ${humanScore}`
            outcome.textContent = `You won this round`
        }else {
            computerScore++;
            outcome.textContent = `computer wins this round`;
            computerPoints.textContent = `Score: ${computerScore}`
           
    }
    

    if (humanScore === 5 && computerScore <= 5) {
        winStatus.textContent = `Game has ended`
        outcome.textContent = `You Won the game`
      
        displayModal()

    } else if (computerScore === 5 && humanScore <= 5) {
        winStatus.textContent = `Game has ended`
        outcome.textContent = `You lost the game`
    
        displayModal()
    }
        

}

function displayModal() {

    modal.style.display = 'block'
    options.style.display ='none'
    playbtn.addEventListener('click', () =>{
        humanScore = 0;
        computerScore = 0;
        rounds = 0;
        humanPoints.textContent = `Score: ${humanScore}`
        computerPoints.textContent = `Score: ${computerScore}`
        humanOutcome.textContent = `?`
        computerOutcome.textContent = `?`
        modal.style.display = 'none'
        winStatus.textContent = 'New Game Started!'
        outcome.textContent = `Highest score at 10 rounds wins!!!`

        options.style.display ='flex'
    })
   
}


// playbtn.addEventListener('click',)
rock.addEventListener('click', () => playRound("rock"));
paper.addEventListener('click', () => playRound("paper"));
scissors.addEventListener('click', () => playRound("scissors"));