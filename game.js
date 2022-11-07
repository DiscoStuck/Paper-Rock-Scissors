/* Score */
let playerScore = 0
let computerScore = 0

/* Random computer choice function */
function computerChoice(){
    let number = Math.floor(Math.random() * 3 + 1);

    
    if (number === 1){
        return ("rock");
    }
    else if (number === 2) {
        return ("paper");
    }
    else{
        return ("scissors");
     }

};
/* Declare winner function */
let result = document.querySelector('.result')
let score = document.querySelector('.score')
let finalWinner = document.querySelector('.winner')

function printWinner(player, computer){

    function winner(player, computer){

        if (!playerScore && !computerScore) finalWinner.innerHTML = ""

        if (computer === player){
            return("draw")
        }
        else if (player === "rock" && computer === "scissors"){
            return ("player")
        }
        else if (player === "rock" && computer === "paper"){
            return ("computer")
        }
        else if (player === "paper" && computer === "rock"){
            return ("player")
        }
        else if (player === "paper" && computer === "scissors"){
            return ("computer")
        }
        else if (player === "scissors" && computer === "paper"){
            return ("player")
        }
        else{
            return ("computer")
        }
    }

    if (winner(player,computer) === "draw"){
        result.innerHTML = "It's a draw. Both players have " + player
        /* return("draw") */
    }
    else if (winner(player, computer) === "player"){
        result.innerHTML = "You win. " + player + " beats " + computer
        playerScore ++
        /* return ("player") */
    }
    else{
        result.innerHTML = "You lose. " + computer + " beats " + player
        computerScore++
        /* return ("computer") */
    }

    score.innerHTML = "Player " + playerScore + " // Computer " + computerScore

    if (playerScore + computerScore >= 5){
        if (playerScore > computerScore){
            finalWinner.innerHTML = "The winner of the game is: YOU"

        }
        else {
        finalWinner.innerHTML = "The winner of the game is: COMPUTER"
        }
        playerScore = 0
        computerScore = 0

    }
} 

/* Event call winner */
const buttons = document.querySelectorAll('button')


buttons.forEach(button => {

    const buttonClass = button.className
    button.addEventListener('click', function(){
        printWinner(buttonClass,computerChoice())
    })
    
})



