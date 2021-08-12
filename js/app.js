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
// const deckOfCards = []

// //Creates the deck of cards
// const makeDeck = () => {
//     for (const rank of ranks) {
//         console.log(rank)
//         for (const suit of suits) {
//             deckOfCards.push(`${rank} of ${suit}`)
//         }
//     }
//     return deckOfCards
// }

//Once called it will create a deck of cards
// for (let i = 0; i < 6; i++) {
//     makeDeck()
// }

// console.log(deckOfCards.length)





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
        this.faceDownCard = null
        this.valueOfHand = 0
    }
    hitCard(deck) {
       let selectedCard = deck.splice(Math.floor(Math.random() * deck.length), 1).toString() //This takes a random card out of the deck and makes it a string instead of array.
       this.hand.push(selectedCard)
    }

    standCard() {

    }

}

// let me = new Dealer
// console.log(me)
// me.hitCard(deckOfCards)
// console.log(me)


//Player Functionality
// As a player, I want the game to allow players the ability to hit
// As a player, I want to the game to allow players the ability to split pairs
// If player splits cards, they must play through both hands 
// As a player, I want to the player to stand
class Player extends Dealer {
    constructor (money) {
        super()
        this.splitHand = []
        this.money = money
    }
    splitCards() {
       this.splitHand.push(this.hand.pop())
    }
}

// let you = new Player

// console.log(you)
// you.hitCard(deckOfCards)
// you.hitCard(deckOfCards)
// you.splitCards()
// console.log(you)


//===============
// GAME FUNCTION 
//===============

const blackjack = {
    deck: [],
    dealer: null,
    players: [],
    createDeck() {
        for(const rank of ranks) {
            console.log(rank)
            for (const suit of suits) {
                this.deck.push(`${rank} of ${suit}`)
            }
        }
        // return this.deck
    },
    startGame() {
        //Create dealers deck | Will use 6 decks for games
        for(let i = 0; i < 6; i++) {
            this.createDeck()
        }
        this.dealer = new Dealer
        this.players.push(new Player)
    }, 
    dealToAllPlayers(deck) {
        for(let i = 0; i < this.players.length; i++) {
            this.players[i].hitCard(deck)
            }
    },
    dealCardsToStart(deck) {
        this.dealToAllPlayers(deck)
        this.dealer.hitCard(deck)
        this.dealToAllPlayers(deck) //Need to go back through and give each player a second card
        this.dealer.hitCard(deck)
         //Dealers 2nd card should be hidden 
        this.dealer.faceDownCard = this.dealer.hand.splice(1, 1, undefined)

    }


}

blackjack.startGame()
console.log(blackjack)
console.log(blackjack.deck.length)



     


console.log(blackjack.deck.length)

blackjack.dealCardsToStart(blackjack.deck)
console.log(blackjack.dealer.hand)
console.log(blackjack.dealer.faceDownCard)
console.log(blackjack.deck.length)
console.log(blackjack.players[0].hand)


//If dealer's first card has a value of 10 or 11 then check second card to see if it gives a value of 21
//         // Give cards values[We will make a function that has computer count values; humans can use their eyes]

// Get Value Function
//Based off of the value of the card in a hand this function will count how close they are to 21
const getValueOfHand = (hand, player) => {
    for(const card of hand) {
        if (card !== undefined) {
            let valueOfCard = card.split('')
            console.log(hand)
            console.log(typeof valueOfCard[0])
            let numericalValue = parseInt(valueOfCard[0], 10)
            console.log(typeof numericalValue)

            player.valueOfHand += numericalValue
            console.log(player.valueOfHand)
         }
    }

}

getValueOfHand(blackjack.dealer.hand, blackjack.dealer)


// UI Functionality
// As a player, I would like a UI that is easy to understand and appealing that adds to the experience.
// As a player, I would like the cards to be presented on the UI
