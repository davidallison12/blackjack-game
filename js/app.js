//============================
// BLACK JACK CARD GAME 
//============================

//Pseudo Code 
// Game needs to:
// Recognize when a player wins a hand (Get the highest hand by hitting 21 or being the highest value w/o going over 21)
// Recognize when a player goes over 21
// Be able to compete against the dealer
// Have cards to be automatically shuffled
// Keep track of wins and losses.
// Know when it is my turn to make a move
// If player splits cards, they must play through both hands before moving to the next player or dealer
// would like the dealer to use at least 2 decks.
// Like cards to be dealt (Can just appear at first)

//Lets start by making a deck of cards
const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
const deckOfCards = []

//Creates the deck of cards
const makeDeck = () => {
    for (const rank of ranks) {
        console.log(rank)
        for (const suit of suits) {
            deckOfCards.push(`${rank} of ${suit}`)
        }
    }
    return deckOfCards
}

//Once called it will create a deck of cards
makeDeck()
console.log(deckOfCards)





//Dealer Functionality
// If dealer's total is 17 or more, they must stand
// If the dealer's total is 16 or less, the must hit until they get to a value over 17

//What things does the dealer need:
    // Needs a hand to play against players
    // Needs the decks of cards to distribute to players [THINK I WILL ADD THIS TO GAME LOGIC]
    // Needs conditionals that will determine how he proceeds in the game
    // Ability to hit or stand 
    //Stretch Goal:
        //Will need  


class Dealer {
    constructor () {
        this.hand = []
    }
    hitCard(deck) {
       let selectedCard = deck.splice(Math.floor(Math.random() * deck.length), 1).toString()
       this.hand.push(selectedCard)
    }

    standCard() {

    }

}

let me = new Dealer
console.log(me)
me.hitCard(deckOfCards)
console.log(me)


//Player Functionality
// As a player, I want the game to allow players the ability to hit
// As a player, I want to the game to allow players the ability to split pairs
// If player splits cards, they must play through both hands 
// As a player, I want to the player to stand



// UI Functionality
// As a player, I would like a UI that is easy to understand and appealing that adds to the experience.
// As a player, I would like the cards to be presented on the UI
