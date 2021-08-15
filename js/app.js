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


//===================================
// Standalone Variables and Functions 
//===================================

const hitButton = document.querySelector('#hit-card-button')
const standButton = document.querySelector('#player1-stand-button')
const splitButton = document.querySelector('#split-card-button')

// hitButton.addEventListener('click', () => {
//     console.log('Hit!')
// })

// standButton.addEventListener('click', () => {
//     console.log("Stand!")
// })

// splitButton.addEventListener('click', () => {
//     console.log('Split')
// })


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
        this.name = null
        this.hand = []
        this.faceDownCard = null
        this.valueOfHand = 0
        this.playerNumber = null // On the backend 0 will be first player to align with array index
    }
    hitCard(deck) {
       let selectedCard = deck.splice(Math.floor(Math.random() * deck.length), 1).pop() //This takes a random card out of the deck and makes it a string instead of array.
       this.hand.push(selectedCard)
    }

    standonHand(players, dealer) {
        if (this.playersNumber < players.length -1) {
            // takeATurn(players[playerNumber+1]) 
        }
        else if (this.playersNumber === players.length -1) {
            // takeATurn(dealer)
        }
        else if(this.name = 'dealer') {
            console.log('Who won?') // Winner function will go in here 
        }
    }

}



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

//As of Saturday Aug. 14 
// - Ensure everything that I currently have works with new cards [DONE]
// Compare values function 
// - Create the turn sequence 
    // - Have all options available depending on my house rules 
//Create conditional for if dealers faceUp card is 10 to check other card for Blackjack

// Log winner function
// Going to need to re-populate cards at some point so will need a function that can erase olds decks and create new ones

const blackjack = {
    deck: [],
    dealer: null,
    players: [],
    totalCardHolders: null, //Will be players + dealer
    currentplayersTurn: 0, // Will hold players number (Dealer is amount of players + 1)
    ranks: ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"],
    suits: ["Clubs", "Diamonds", "Hearts", "Spades"],
    cardNumber: 0,
    createDeck(){
        // let cardNumber = 0
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
                    this.deck[this.cardNumber].value = 10
                                // console.log(player.valueOfHand)
                    
                // Conditional for Ace
            
                }
                else if(this.ranks[i] === 'Ace') { //Write functionality for Ace
                    //             console.log(`Inside of Ace If Statement: ${rankOfCard}`)
                    //             console.log(player.valueOfHand)
                    //             player.valueOfHand += 11
                    this.deck[this.cardNumber].value = 11

                    //             console.log(player.valueOfHand)
                    //             if(player.valueOfHand > 21) { //Reads to see if over 21 first, then if so, changes value of Ace to 1
                    //                 player.valueOfHand -= 10
                }
                else {
                    //             console.log(`Inside of If Statement: ${rankOfCard}`)
                    //             console.log(typeof rankOfCard)
                    //         //    console.log(rankOfCard !== 'undefined')
                    let numericalValue = parseInt(this.deck[this.cardNumber].rank, 10)
                    //             console.log(typeof numericalValue)
                                
                    //             console.log(player.valueOfHand)
                                
                    this.deck[this.cardNumber].value = numericalValue
                    //             console.log(player.valueOfHand)
                }
                this.cardNumber++
            }
        }  
    },   
    startGame() {
        //Create dealers deck | Will use 6 decks for games
        for(let i = 0; i < 6; i++) {
            this.createDeck()
        }
        this.dealer = new Dealer
        this.dealer.name = 'dealer'
        this.players.push(new Player)
        this.players[0].playerNumber = this.players.length
        this.dealer.playerNumber = this.players.length + 1
        this.totalCardHolders = this.players.length + 1

        //NOTE: WANT TO ADD A DISABLE BUTTONS FEATURE HERE
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
         console.log(this.dealer.hand)
        this.dealer.hand[this.dealer.hand.length-1].isFaceup = false

    },
    getValueOfHand(hand, player) {
        player.valueOfHand = 0 //Setting to 0 to read hand with clean start
        console.log(hand)
        for(const card of hand) {
            let rankOfCard = card.rank
            let valueOfCard = card.value
            console.log(`This is the card's rank: ${rankOfCard}`)
            player.valueOfHand += valueOfCard
            console.log(`This is the value of Players hand: ${player.valueOfHand}`)
        }
        for (let i = 0; i < hand.length; i++) {
            if (player.valueOfHand > 21 && hand[i].rank === 'Ace') {
                hand[i].value = 1
                this.getValueOfHand(hand, player)
            }
        }
    },


    // standonHand(players, dealer) {
    //     if (this.playersNumber < players.length -1) {
    //         // takeATurn(players[playerNumber+1]) 
    //     }
    //     else if (this.playersNumber === players.length -1) {
    //         // takeATurn(dealer)
    //     }
    //     else if(this.name = 'dealer') {
    //         console.log('Who won?') // Winner function will go in here 
    //     }
    // }
    //Next is taking a turn/Going through a round. What needs to happen is: 
        // Check to see if anyone has a True blackjack to start (CheckForBlackjack)
            // If this happens, player/dealer wins round 
        // If no one has blackjack, first player decides to hit, stand or split(if applicable)
        //If player hits, they receive another card
            //If it hits, 21, move on to next players to give them a chance 
                //Dealer will go next and try to hit 21. They can't hit after going over 16
        //If player stands, we will move to next player
        //If player splits, their cards will be moved to 2 separate hands (Need to figure this out)
            //The player will then hit for both hands. 
            //***IDEA TO START: Hands are automatically an array within an array
            //Both hands will be valued seperately 


}

//===================
// Taking a Turn
//===================

//Next is taking a turn/Going through a round. What needs to happen is: 
        // Check to see if anyone has a True blackjack to start (CheckForBlackjack)
            // If this happens, player/dealer wins round 
        // If no one has blackjack, first player decides to hit, stand or split(if applicable)
        //If player hits, they receive another card
            //If it hits, 21, move on to next players to give them a chance 
                //Dealer will go next and try to hit 21. They can't hit after going over 16
        //If player stands, we will move to next player
        //If player splits, their cards will be moved to 2 separate hands (Need to figure this out)
            //The player will then hit for both hands. 
            //***IDEA TO START: Hands are automatically an array within an array
            //Both hands will be valued seperately 

// const captureAnswerForSplit = () => {
//     const playersMovewithSplit = prompt('What would you like to do?', 'Hit/Stand/Split')
   
//     if (playersMovewithSplit === 'Hit') {
//         player.hitCard() //I think here I need a function to check for a bust, if not bust then can run this function again until the player stands
//     }
//     // else if(playersMovewithSplit === 'Split')
// }



// const playARound = () => {

//     for(let i = 0; i < blackjack.players.length; i++) {
//         hitButton.setAttribute('data-player', `${blackjack.players[i]}`)
//         standButton.setAttribute('data-player', `${blackjack.players[i]}`)
//         splitButton.setAttribute('data-player', `${blackjack.players[i]}`)
//     }
// }




const startATurn = () => { //This function will let player know it is their turn and they can play
    // Will include:

    
    //Increasing counter
    blackjack.currentplayersTurn = blackjack.currentplayersTurn+=1
    console.log(blackjack.totalCardHolders)
    console.log(blackjack.currentplayersTurn)
    console.log(blackjack.dealer)
    //Have a condition for the dealer
    if (blackjack.currentplayersTurn === blackjack.totalCardHolders) {
        console.log('it is the dealers turn') //Will need a function that allows the dealer to decide whether to hit or stand. 
    }
    
    // Enabling buttons
    // console.log(blackjack)
    // console.log(document.querySelector(`.player${blackjack.currentplayersTurn}-buttons-container`))
    document.querySelector(`#player${blackjack.currentplayersTurn}-stand-button`).disabled = false
    // Highlighting area so player is aware it is their turn 
    // Player will then be able to take their turn
    

}






    // if (player.hand[0].rank === player.hand[1].rank) {
    //     hitButton.disabled = false
    //     standButton.disabled = false
    //     splitButton.disabled = false  // LETS MAKE A FUNCTION FOR THIS LATER
    //     alert('What would you like to do?: Hit/Stand/Split')       
    // }
    // else {
    //     hitButton.disabled = false
    //     standButton.disabled = false
    //     splitButton.disabled = true
    //     alert('What would you like to do?: Hit/Stand')       
    // }



    // hitButton.addEventListener('click', () => {
    //     console.log('Hit!')
    // })
    
    standButton.addEventListener('click', (e) => {
       startATurn()
    })
    
    // splitButton.addEventListener('click', () => {
    //     console.log('Split')
    // })
    


// const playARound = () => {

// }


//====================


blackjack.startGame()
console.log(blackjack.deck)
// console.log(blackjack.deck.length)
// blackjack.dealer.hitCard(blackjack.deck)
blackjack.dealCardsToStart(blackjack.deck)
// console.log(blackjack.dealer)
console.log(blackjack.players[0])
// blackjack.players[0].hitCard(blackjack.deck)
// blackjack.players[0].hitCard(blackjack.deck)

// blackjack.getValueOfHand(blackjack.dealer.hand, blackjack.dealer)
blackjack.getValueOfHand(blackjack.players[0].hand, blackjack.players[0])
startATurn()
     


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


//Making event listeners for buttons