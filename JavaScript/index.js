// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

// let firstCard = 6
// let secondCard = 9

// let sum = firstCard + secondCard

// console.log(sum)

//SHOWING FOR START OF GAME
let gotBlackJack = false
let stillPlaying = false
let cards= []
let sum = 0


//DECLARATIONS
let playerStatus = document.getElementById("player-status")
let cardsSel = document.getElementById("cards-sel")
let sumSel = document.getElementById("sum-sel")


//FUNCTIONS

function randomCard() {
    let randomNum = Math.floor( Math.random()*11 ) +2
}


function startGame() {
    let cardOne = randomCard();
    let cardTwo = randomCard();
    cards = [cardOne, cardTwo];
    sumCards = cardOne + cardTwo;
    loadGame()
}

function loadGame() {
    //load for cards
    cardsSel.textContent = "Cards: "
    //keep displaying loaded cards
    for (let i = 0; i<cards.length; i++) {
        cardsSel.textContent = cardsSel.textContent + cards[i] + " "
    };
    //load for sum
    sumSel.textContent = "Sum: " + sumCards;
    
//BOOLEANS

    if (sum <= 20) {
        playerStatus = "Would you like to draw another card? :)"
    } else if (sum === 21){
        playerStatus = "BlackJack!!! XD"
        gotBlackJack = true
    } else {
        playerStatus = "You lose. :("
        stillPlaying = false
    }

        playerStatus.textContent = playerStatus
}

function drawNewCard() {
    if (gotBlackJack===false && stillPlaying===true ) {
        let cardThree = randomNum()
        sum = sum + cardThree
        carThree.push(cards)
        loadGame()
    }
}