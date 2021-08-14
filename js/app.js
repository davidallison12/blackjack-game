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
// const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
// const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]

// //=====================
// // Lets test card as object
// //=====================

// const deckOfCards = []

// //Creates the deck of cards
// const makeDeck = () => {
//     let cardNumber = 0
//     for (let i = 0; i < ranks.length; i++){
//     // for (const rank of ranks) {
//         console.log(ranks[i])
//         for(let j = 0; j < suits.length; j++ ) {
//         // for (const suit of suits) {
//             deckOfCards.push({rank: `${ranks[i]}`, suit:`${suits[j]}`, value: 0, isFaceup: true}) //Make this into an object
//             if (ranks[i] === 'King' || ranks[i] === 'Jack' || ranks[i] === 'Queen' ) {
//                             // console.log(`Inside of King If Statement: ${rankOfCard}`)
//                             // console.log(player.valueOfHand)
//                             // player.valueOfHand += 10
//                 deckOfCards[cardNumber].value = 10
//                             // console.log(player.valueOfHand)
                
//              // Conditional for Ace
           
//             }
//             else if(ranks[i] === 'Ace') { //Write functionality for Ace
//                 //             console.log(`Inside of Ace If Statement: ${rankOfCard}`)
//                 //             console.log(player.valueOfHand)
//                 //             player.valueOfHand += 11
//                 deckOfCards[cardNumber].value = 11

//                 //             console.log(player.valueOfHand)
//                 //             if(player.valueOfHand > 21) { //Reads to see if over 21 first, then if so, changes value of Ace to 1
//                 //                 player.valueOfHand -= 10
//             }
//             else {
//                 //             console.log(`Inside of If Statement: ${rankOfCard}`)
//                 //             console.log(typeof rankOfCard)
//                 //         //    console.log(rankOfCard !== 'undefined')
//                 let numericalValue = parseInt(deckOfCards[cardNumber].rank, 10)
//                 //             console.log(typeof numericalValue)
                            
//                 //             console.log(player.valueOfHand)
                            
//                 deckOfCards[cardNumber].value = numericalValue
//                 //             console.log(player.valueOfHand)
//              }
//             cardNumber++
//         }
    
//     }  
//     return deckOfCards 
// }

// makeDeck()
// console.log(deckOfCards)


// getValueOfHand(hand, player) {
//     player.valueOfHand = 0 //Setting to 0 to read hand with clean start
//     console.log(hand)
//     for(const card of hand) {
//         let valueOfCard = card.split(' ')
//         let rankOfCard = valueOfCard[0]
    
//         //Conditional for Face cards
//         if (rankOfCard === 'King' || rankOfCard === 'Jack' || rankOfCard === 'Queen' ) {
//             console.log(`Inside of King If Statement: ${rankOfCard}`)
//             console.log(player.valueOfHand)
//             player.valueOfHand += 10
//             console.log(player.valueOfHand)

//         } // Conditional for Ace
//         else if(rankOfCard === 'Ace') { //Write functionality for Ace
//             console.log(`Inside of Ace If Statement: ${rankOfCard}`)
//             console.log(player.valueOfHand)
//             player.valueOfHand += 11
//             console.log(player.valueOfHand)
//             if(player.valueOfHand > 21) { //Reads to see if over 21 first, then if so, changes value of Ace to 1
//                 player.valueOfHand -= 10
//             }
//         } // Conditional for number cards 
//         else if (rankOfCard !== 'undefined') {
//             console.log(`Inside of If Statement: ${rankOfCard}`)
//             console.log(typeof rankOfCard)
//         //    console.log(rankOfCard !== 'undefined')
//             let numericalValue = parseInt(rankOfCard, 10)
//             console.log(typeof numericalValue)
            
//             console.log(player.valueOfHand)
            
//             player.valueOfHand += numericalValue
//             console.log(player.valueOfHand)
//         }
//     }
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
    ranks: ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"],
    suits: ["Clubs", "Diamonds", "Hearts", "Spades"],
    // createDeck() {
    //     for(const rank of ranks) {
    //         console.log(rank)
    //         for (const suit of suits) {
    //             this.deck.push(`${rank} of ${suit}`)
    //         }
    //     }
    //     // return this.deck
    // },
    createDeck(){
        let cardNumber = 0
        for (let i = 0; i < this.ranks.length; i++){
        // for (const rank of ranks) {
            console.log(this.ranks[i])
            for(let j = 0; j < this.suits.length; j++ ) {
            // for (const suit of suits) {
                this.deck.push({rank: `${this.ranks[i]}`, suit:`${this.suits[j]}`, value: 0, isFaceup: true}) //Make this into an object
                if (this.ranks[i] === 'King' || this.ranks[i] === 'Jack' || this.ranks[i] === 'Queen' ) {
                                // console.log(`Inside of King If Statement: ${rankOfCard}`)
                                // console.log(player.valueOfHand)
                                // player.valueOfHand += 10
                    this.deck[cardNumber].value = 10
                                // console.log(player.valueOfHand)
                    
                // Conditional for Ace
            
                }
                else if(this.ranks[i] === 'Ace') { //Write functionality for Ace
                    //             console.log(`Inside of Ace If Statement: ${rankOfCard}`)
                    //             console.log(player.valueOfHand)
                    //             player.valueOfHand += 11
                    this.deck[cardNumber].value = 11

                    //             console.log(player.valueOfHand)
                    //             if(player.valueOfHand > 21) { //Reads to see if over 21 first, then if so, changes value of Ace to 1
                    //                 player.valueOfHand -= 10
                }
                else {
                    //             console.log(`Inside of If Statement: ${rankOfCard}`)
                    //             console.log(typeof rankOfCard)
                    //         //    console.log(rankOfCard !== 'undefined')
                    let numericalValue = parseInt(this.deck[cardNumber].rank, 10)
                    //             console.log(typeof numericalValue)
                                
                    //             console.log(player.valueOfHand)
                                
                    this.deck[cardNumber].value = numericalValue
                    //             console.log(player.valueOfHand)
                }
                cardNumber++
            }
        
        }  
        // return deckOfCards 
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
        this.dealer.faceDownCard = this.dealer.hand.splice(1, 1, 'undefined')

    },
    getValueOfHand(hand, player) {
        player.valueOfHand = 0 //Setting to 0 to read hand with clean start
        console.log(hand)
        for(const card of hand) {
            let valueOfCard = card.split(' ')
            let rankOfCard = valueOfCard[0]
        
            //Conditional for Face cards
            if (rankOfCard === 'King' || rankOfCard === 'Jack' || rankOfCard === 'Queen' ) {
                console.log(`Inside of King If Statement: ${rankOfCard}`)
                console.log(player.valueOfHand)
                player.valueOfHand += 10
                console.log(player.valueOfHand)

            } // Conditional for Ace
            else if(rankOfCard === 'Ace') { //Write functionality for Ace
                console.log(`Inside of Ace If Statement: ${rankOfCard}`)
                console.log(player.valueOfHand)
                player.valueOfHand += 11
                console.log(player.valueOfHand)
                if(player.valueOfHand > 21) { //Reads to see if over 21 first, then if so, changes value of Ace to 1
                    player.valueOfHand -= 10
                }
            } // Conditional for number cards 
            else if (rankOfCard !== 'undefined') {
                console.log(`Inside of If Statement: ${rankOfCard}`)
                console.log(typeof rankOfCard)
            //    console.log(rankOfCard !== 'undefined')
                let numericalValue = parseInt(rankOfCard, 10)
                console.log(typeof numericalValue)
                
                console.log(player.valueOfHand)
                
                player.valueOfHand += numericalValue
                console.log(player.valueOfHand)
            }
        }
    }


}

blackjack.startGame()
console.log(blackjack.deck)
// console.log(blackjack.deck.length)



     


// console.log(blackjack.deck.length)

// blackjack.dealCardsToStart(blackjack.deck)
// console.log(blackjack.dealer.hand)
// console.log(blackjack.dealer.faceDownCard)
// console.log(blackjack.deck.length)
// console.log(blackjack.players[0].hand)


//If dealer's first card has a value of 10 or 11 then check second card to see if it gives a value of 21
//         // Give cards values[We will make a function that has computer count values; humans can use their eyes]



// blackjack.getValueOfHand(blackjack.dealer.hand, blackjack.dealer)
// blackjack.getValueOfHand(blackjack.players[0].hand, blackjack.players[0])


// UI Functionality
// As a player, I would like a UI that is easy to understand and appealing that adds to the experience.
// As a player, I would like the cards to be presented on the UI
