// remove logic that plays 5 rounds exactly
// create 3 buttons for each option in html
// add even listener in js to each button plugging in player choice
// create div with js to display results (or html simpler)
// create p via DOM method
// insert text to p via DOM method for round outcome
// append p child to div parent
// repeat this until a player reaches 5 points
// create p and insert text via DOM methods to announce winner
// append winner text p to parent div

let player_choice = 'nothing';

let buttons = document.querySelectorAll('button');
let buttonArray = Array.from(buttons);
buttonArray.forEach(button => {
    button.addEventListener('click', () => {
        player_choice = button.id;
        console.log(player_choice);
    });
})