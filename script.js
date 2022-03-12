let weapon = [`rock`, `paper`, `scissors`];

let randomIndexNumber = Math.floor(Math.random() * weapon.length);
let computerPlay = () => weapon[randomIndexNumber];
// let playerInput = prompt("Please enter your weapon: ").toLowerCase();


let playRound = (playerSelection, computerSelection) => {
    // Player choose ROCK
    if(playerSelection ===`rock` && computerSelection ===`paper`){
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You LOSE. Paper beats Rock`;
    } else if (playerSelection=== `rock`&& computerSelection ===`scissors`) {
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You WIN. Rock beats Scissors`;
    } else if (playerSelection=== `rock`&& computerSelection ===`rock`) {
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. DRAW!!`;
    }

    // Player choose SCISSORS
    if(playerSelection ===`scissors` && computerSelection ===`paper`){
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You WIN. Scissors beats Paper`;
    } else if (playerSelection=== `scissors`&& computerSelection ===`scissors`) {
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. DRAW!!`;
    } else if (playerSelection=== `scissors`&& computerSelection ===`rock`) {
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You LOSE. Rock beats Scissors`;
    }

    // Player choose PAPER
    if(playerSelection ===`paper` && computerSelection ===`paper`){
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. DRAW!!`;
    } else if (playerSelection=== `paper`&& computerSelection ===`scissors`) {
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You LOSE. Scissors beats Paper`;
    } else if (playerSelection=== `paper`&& computerSelection ===`rock`) {
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You WIN. Paper beats Rock`;
    }

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));