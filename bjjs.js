let firstCard = getRandomCard()
let secondCard =getRandomCard()  
let sum = firstCard + secondCard
let cards=[firstCard,secondCard]
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let SumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
//console.log(messageEl)

function getRandomCard() {
   
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}


 function startgame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
  function renderGame(){

    cardsEl.textContent="Cards: "
    for (let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i] + " "
    }
SumEl.textContent="Sum: " +sum
if (sum <= 20) {
    message = "Do you want to draw a new card? "
} else if (sum === 21) {
    message = "Wohoo! You've got  Blackjack! "
    hasBlackJack = true
} else {
    message = "You're out of the game! "
    isAlive = false
}
messageEl.textContent=message


//console.log(message)
}

function newCard(){
   
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}