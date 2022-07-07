// game() function
// declare variable to store player wins and one to store comp wins
// loop start (up to 5 rounds)
// prompt player selection and save to variable
// generate computer selection via function and save to variable
// call playRound function taking player/computer selection inputs
    // compare inputs, decide winner via logic
    // print winner of round
    // go to next iteration of loop and repeat
// once loop completed (5 rounds), tally round wins and print game winner

function game() {
    let player_choice = prompt("Enter Choice: ").toLowerCase();
    let comp_choice = computerPlay();
    console.log(comp_choice);
    console.log(player_choice);
}

function playRound(player_choice, comp_choice) {
    
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