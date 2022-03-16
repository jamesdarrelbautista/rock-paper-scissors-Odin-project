let weapons = [`rock`, `paper`, `scissors`];
let computerScore = 0
    , userScore = 0;
let playerInput, computerPlay;
let randomIndexNumber;


let playRound = (playerSelection, computerSelection) => {
    // Player choose ROCK
    if (playerSelection === `rock` && computerSelection === `paper`) {
        computerScore++;
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You LOSE. Paper beats Rock`;
    } else if (playerSelection === `rock` && computerSelection === `scissors`) {
        userScore++;
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You WIN. Rock beats Scissors`;
    } else if (playerSelection === `rock` && computerSelection === `rock`) {
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. DRAW!!`;
    }

    // Player choose SCISSORS
    if (playerSelection === `scissors` && computerSelection === `paper`) {
        userScore++;
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You WIN. Scissors beats Paper`;
    } else if (playerSelection === `scissors` && computerSelection === `scissors`) {
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. DRAW!!`;
    } else if (playerSelection === `scissors` && computerSelection === `rock`) {
        computerScore++;
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You LOSE. Rock beats Scissors`;
    }

    // Player choose PAPER
    if (playerSelection === `paper` && computerSelection === `paper`) {
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. DRAW!!`;
    } else if (playerSelection === `paper` && computerSelection === `scissors`) {
        computerScore++;
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You LOSE. Scissors beats Paper`;
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        userScore++;
        return `You chose ${playerSelection}. Computer chose ${computerSelection}. You WIN. Paper beats Rock`;
    }

}

// for (let i = 0; i < 5; i++) {
//     randomIndexNumber = Math.floor(Math.random() * weapon.length);
//     playerInput = prompt("Please enter your weapon: ").toLowerCase();
//     computerPlay = weapon[randomIndexNumber];
//     console.log(playRound(playerInput, computerPlay));
// }

// let decidingGame = (userScore, computerScore) => {
//     randomIndexNumber = Math.floor(Math.random() * weapon.length);
//     playerInput = prompt("Please enter your weapon: ").toLowerCase();
//     computerPlay = weapon[randomIndexNumber];
//     console.log(playRound(playerInput, computerPlay));
// }
// while (userScore == computerScore) {
//     decidingGame(userScore, computerScore);
// }

// if (userScore > computerScore) {
//     console.log("You win the BEST OF 5!!! Congratulations!")
// } else if (userScore < computerScore) {
//     console.log(`Computer wins the BEST OF 5!!! Better luck next time!`);
// }

let section1 = document.querySelector('.container-1')
let section1Item1 = document.querySelector('.container-1 .item-1');
let section2 = document.querySelector('.container-2');
let section2Item1 = document.querySelector('.container-2 .item-1');

let userWeapons = document.querySelector('.user-weapon');
let computerWeapons = document.querySelector('.computer-weapon');

let weaponButtons = document.querySelectorAll('.weapon');

let userScoreText = document.querySelector('.userScore');
let computerScoreText = document.querySelector('.computerScore');

weaponButtons.forEach(weapon => {
    weapon.addEventListener("mouseover", (e)=>{       
        userWeapons.textContent = e.target.innerText;
    });
    weapon.addEventListener("click",(e)=>{
        randomIndexNumber = Math.floor(Math.random() * weapons.length);
        computerPlay = weapons[randomIndexNumber];
        computerWeapons.textContent = computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1);
        playerSelection = e.target.innerText;
        console.log(playRound(playerSelection.toLowerCase(), computerPlay));
        userScoreText.textContent = userScore;
        computerScoreText.textContent = computerScore;

        if (userScore == 5 || computerScore == 5) {
            section1.removeChild(section1Item1);
            section2.removeChild(section2Item1);
            let heading1 = document.createElement('h1');
            
            section1.appendChild(heading1);
            if(userScore > computerScore) heading1.textContent = 'You win the BEST OF 5!!! Congratulations!';
            else heading1.textContent = 'Computer wins the BEST OF 5!!! Better luck next time!';
        }
    });
});



