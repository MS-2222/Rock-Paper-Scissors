
//window.addEventListener('click', game);
//const buttons = document.querySelectorAll('button');
//buttons.forEach(button => button.addEventListener('click', game));

let player_wins = 0;
let comp_wins = 0;
let player_choice = 'string'

let buttons = document.querySelectorAll('button');
let buttonArray = Array.from(buttons);
buttonArray.forEach(button => {
    button.addEventListener('click', () => {
        player_choice = button.id;
        game();
    });
})

function game() {
   let comp_choice = computerPlay();
   playRound(player_choice, comp_choice);
   let div = document.querySelector('.results');
   let content = document.createElement('p');
   content.textContent = `Player Wins: ${player_wins}, Computer Wins: ${comp_wins}`;
   div.appendChild(content);
    

   if (player_wins === 5) {
        let winnerText = document.createElement('p');
        winnerText.textContent = `You won the game! ${player_wins} to ${comp_wins}`;       
        div.appendChild(winnerText);
   }
   else if (comp_wins === 5) {
    let winnerText = document.createElement('p');
    winnerText.textContent = `You lost the game! ${player_wins} to ${comp_wins}`;       
    div.appendChild(winnerText);
   }
}


function playRound(player_choice, comp_choice) {
    if (player_choice === 'rock' && comp_choice === 'scissors' ||
        player_choice === 'paper' && comp_choice === 'rock' ||
        player_choice === 'scissors' && comp_choice === 'paper') {
            let div = document.querySelector('.results');
            let content = document.createElement('p');
            content.textContent = `You win this round! ${player_choice} beats ${comp_choice}`;
            div.appendChild(content);
            return ++player_wins;
        }
    else if (player_choice === 'rock' && comp_choice === 'paper' ||
            player_choice === 'paper' && comp_choice === 'scissors' ||
            player_choice === 'scissors' && comp_choice === 'rock') {
                let div = document.querySelector('.results');
                let content = document.createElement('p');
                content.textContent = `You lose this round! ${comp_choice} beats ${player_choice}`;
                div.appendChild(content);
                return ++comp_wins;
            }
    else {
        let div = document.querySelector('.results');
        let content = document.createElement('p');
        content.textContent = `Draw this round! ${player_choice} matches ${comp_choice}`;
        div.appendChild(content);
    }
}


function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        let comp_choice = 'rock';
        return comp_choice;
    }
    else if (number === 1) {
        let comp_choice = 'paper';
        return comp_choice;
    }
    else {
        let comp_choice = 'scissors';
        return comp_choice;
    }
}