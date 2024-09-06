// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

// let firstCard = 6
// let secondCard = 9

// let sum = firstCard + secondCard

// console.log(sum)

let player = {
    name: "Player",
    tokens: 200
}

//SHOWING FOR START OF GAME
let cards= []
let sum = 0
let status = ""
let gotBlackJack = false
let stillPlaying = false

//DECLARATIONS
let playerStatus = document.getElementById("player-status")
let cardsSel = document.getElementById("cards-sel")
let sumSel = document.getElementById("sum-sel")
let playerSel = document.getElementById("player-sel")
playerSel.textContent = player.name + ": R" + player.tokens 

//FUNCTIONS

function randomCard() {
    let randomNum = Math.floor( Math.random()*11 ) + 2
    return randomNum
}


function startGame() {
    let cardOne = randomCard()
    let cardTwo = randomCard()
    cards = [cardOne, cardTwo,]
    sumCards = cardOne + cardTwo 
    stillPlaying = true
    loadGame()
}

function loadGame() {
    //load for cards
    cardsSel.textContent = "Cards: "
    //keep displaying loaded cards
    for (let i = 0; i < cards.length; i++) {
        cardsSel.textContent += cards[i] + " "
    }
    //load for sum
    sumSel.textContent = "Sum: " + sumCards
    
//BOOLEANS

    if (sumCards <= 20) {
        status = "Would you like to draw another card? :)"
        stillPlaying = true
    } else if (sumCards === 21) {
        status = "BlackJack!!! XD"
        gotBlackJack = true
        
    } else if (sumCards > 21) {
        status = "You lose. :("
        stillPlaying = false
    
    }
      playerStatus.textContent = status
}

function drawNewCard() {
    if (gotBlackJack===false && stillPlaying===true) {
        let cardThree = randomCard()
        sumCards += cardThree
        cards.push(cardThree)
        loadGame()
    }
}