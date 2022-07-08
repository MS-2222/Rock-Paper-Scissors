// game() function
// declare variable to store player wins and one to store comp wins
// loop start (up to 5 rounds)
// prompt player selection and save to variable
// generate computer selection via function and save to variable
// call playRound function taking player/computer selection inputs
    // compare inputs, decide winner via logic
    // print winner of round
    // ++ score of player or comp or neither if draw
    // go to next iteration of loop and repeat
// once loop completed (5 rounds), tally round wins and print game winner

function game() {
    let player_choice = prompt("Enter Choice: ").toLowerCase();
    let comp_choice = computerPlay();
    playRound(player_choice, comp_choice);
    //let player_wins = 0;
    //let comp_wins = 0;
    //let round = playRound(player_choice, comp_choice);
    //if (player_wins > comp_wins) {
        //console.log(`You win! ${players_wins} to ${comp_wins}`);
    //}
    //else if (player_wins < comp_wins) {
        //console.log(`You lose! ${player_wins} to ${comp_wins}`);
    //}
    //else {
        //console.log("The game was a draw!");
    //}
}

function playRound(player_choice, comp_choice) {
    if (player_choice === 'rock' && comp_choice === 'scissors' ||
        player_choice === 'paper' && comp_choice === 'rock' ||
        player_choice === 'scissors' && comp_choice === 'paper') {
            console.log(`You win this round! ${player_choice} beats ${comp_choice}`);
            //return ++player_wins;
        }
    else if (player_choice === 'rock' && comp_choice === 'paper' ||
            player_choice === 'paper' && comp_choice === 'scissors' ||
            player_choice === 'scissors' && comp_choice === 'rock') {
                console.log(`You lose this round! ${comp_choice} beats ${player_choice}`);
                //return ++comp_wins;
            }
    else {
        console.log(`Draw this round! ${player_choice} matches ${comp_choice}`);
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