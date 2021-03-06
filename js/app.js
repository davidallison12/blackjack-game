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

const hitButton = document.querySelector('#player1-hit-card-button')
const standButton = document.querySelector('#player1-stand-button')
const splitButton = document.querySelector('#player1-split-card-button')
const playAgainButton = document.querySelector('#play-new-round')
const nameButton = document.querySelector('#name-button')
const nameInput = document.querySelector('#name-input')
const nameField = document.querySelector('#your-name')
const computerPrompts = document.querySelector('#computer-inputs')
const dealerScore = document.querySelector('#dealer-score')
const playerScore = document.querySelector('#player-score')





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
        this.playerNumber = 0 // On the backend 0 will be first player to align with array index
        this.NumberOfWins = 0
        this.isSplit = false
    }
    hitCard(deck, hand) {
        let selectedCard = deck.splice(Math.floor(Math.random() * deck.length), 1).pop() //This takes a random card out of the deck and makes it a string instead of array.
        hand.push(selectedCard)
        if (this.isSplit === false) {
            this.appendCard(selectedCard)
       }
    }

    appendCard(card){
        if (this.name === "dealer") {
            let newDiv = document.createElement('div')
            newDiv.className = 'playing-card-image-container-dealer'
            newDiv.appendChild(blackjack.createCard(card))
            document.querySelector('#dealer-div').appendChild(newDiv)
            return
        }
       

        let newDiv = document.createElement('div')
        newDiv.className = 'playing-card-image-container'
        newDiv.appendChild(blackjack.createCard(card))
        document.querySelector(`#player${this.playerNumber}-div`).appendChild(newDiv)
    }

    removeCards() {
        if (this.name === "dealer") {
            for(let i= 0; i < this.hand.length; i++) {
                document.querySelector('.playing-card-image-container-dealer').remove()
                // document.querySelector('#dealer-div').removeChild(document.getElementsByTagName(''))
            }
            // this.hand.forEach(card => document.querySelector('#dealer-div').removeChild(document.getElementsByTagName('div')))
            return
        }
        for(let i= 0; i < this.hand.length; i++) {
            if(this.isSplit === true){
                document.querySelector(`#split-div-${i}`).remove()
            }
            else{
            document.querySelector('.playing-card-image-container').remove()
            }
            // document.querySelector(`#player${this.playerNumber}-div`).removeChild(document.getElementsByTagName('div'))
        }
        return
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
    //Handles the DOM element of splitting once you click the split button
    handleSplitOnDom = (card) => {
        this.removeCards()
        for(let i = 0; i < this.hand.length; i++) {
            let newDiv = document.createElement('div')
            newDiv.className = 'playing-card-image-container'
            newDiv.appendChild(blackjack.createCard(this.hand[i]))
            console.log(newDiv)

            let splitDiv = document.createElement('div')
            splitDiv.className = 'split-div'
            splitDiv.id = `split-div-${i}`
            splitDiv.appendChild(newDiv)
            document.querySelector(`#player${this.playerNumber}-div`).appendChild(splitDiv)
    
        }
    }
}




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
    suits: ["Diamonds","Clubs", "Hearts", "Spades"],
    cardNumber: 0,
    roundsPlayer:0,
    roundsPlayed: 0,
    createDeck(){
        // let cardNumber = 0
        for (let i = 0; i < this.ranks.length; i++){
        // for (const rank of ranks) {
            console.log(this.ranks[i])
            for(let j = 0; j < this.suits.length; j++ ) {
            // for (const suit of suits) {
                this.deck.push({rank: `${this.ranks[i]}`, suit:`${this.suits[j]}`, value: 0, isFaceup: true,isHandComplete: false, image:`${this.ranks[i]==="10" ? this.ranks[i] :  this.ranks[i].split('')[0]}${this.suits[j].split('')[0]}`}) //Make this into an object
                
                
                if (this.ranks[i] === 'King' || this.ranks[i] === 'Jack' || this.ranks[i] === 'Queen' ) {
                                
                    this.deck[this.cardNumber].value = 10
                    
                // Conditional for Ace
                }
                else if(this.ranks[i] === 'Ace') { //Write functionality for Ace
                  
                    this.deck[this.cardNumber].value = 11
                }
                else {

                    let numericalValue = parseInt(this.deck[this.cardNumber].rank, 10)
                    this.deck[this.cardNumber].value = numericalValue
                }
                this.cardNumber++
            }
        }  
    },   
    startGame() {
        //Create dealers deck | Will use 6 decks for games
        nameField.innerHTML = nameInput.value

        for(let i = 0; i < 6; i++) {
            this.createDeck()
        }
        this.dealer = new Dealer
        this.dealer.name = 'dealer'
        this.players.push(new Player)
        this.players[0].playerNumber = this.players.length
        this.dealer.playerNumber = this.players.length + 1
        this.totalCardHolders = this.players.length + 1
        this.players[0].name = nameInput.value
        console.log(this.players[0])
        nameInput.value = ""
        //NOTE: WANT TO ADD A DISABLE BUTTONS FEATURE HERE
    }, 
    dealToAllPlayers(deck) {
        for(let i = 0; i < this.players.length; i++) {
            this.players[i].hitCard(deck, this.players[i].hand)
            }
    },
    getValueOfHand(hand, player) {
        player.valueOfHand = 0 //Setting to 0 to read hand with 
        for(const card of hand) {
            // let rankOfCard = card.rank
            let valueOfCard = card.value

            
            player.valueOfHand += valueOfCard

        }
        for (let i = 0; i < hand.length; i++) {
            if ((player.valueOfHand > 21 && hand[i].rank === 'Ace') && hand[i].value === 11) {
                hand[i].value = 1
                this.getValueOfHand(hand, player)
            }
        }
        return player.valueOfHand
    },
    dealCardsToStart(deck) {
        this.dealToAllPlayers(deck)
        this.dealer.hitCard(deck, this.dealer.hand)
        this.dealToAllPlayers(deck) //Need to go back through and give each player a second card
        this.dealer.hitCard(deck, this.dealer.hand)
         //Dealers 2nd card should be hidden 
        console.log(this.dealer.hand)
        this.dealer.hand[this.dealer.hand.length-1].isFaceup = false
        // this.determinefaceDown()

        let dealersTotal = this.getValueOfHand(this.dealer.hand,this.dealer)
        console.log(this.getValueOfHand(this.dealer.hand,this.dealer))
        
        return
    },
    // determinefaceDown() {
    //    for(let i = 0; this.dealer.hand.length; i++) {
    //        if(this.dealer.hand[i].isFaceup === false) {
    //         this.dealer.hand[i].image = 'purple_back.png'
    //        }
    //        else {
    //            this.dealer.hand[i].image = `${this.dealer.hand[i].rank ==="10" ? this.dealer.hand[i].rank :  this.dealer.hand[i].rank.split('')[0]}${this.dealer.hand[i].suit.split('')[0]}`
    //        }
    //    }
    // },
    getValueOfHandwithSplit(hand, player) {
        blackjack.determineCorrectValueInSplit(player)
       
        // console.log(hand)
        for(const card of hand) {
            let rankOfCard = card.rank
            let valueOfCard = card.value
            // console.log(`This is the card's rank: ${rankOfCard}`)
            if (blackjack.players[0].hand[0][0]) {
                if(blackjack.players[0].hand[0][0].isHandComplete === false){
                    // console.log(player.hand.indexOf(hand))
                    player.valueOfHand[0] += valueOfCard
                    console.log(blackjack.players[0].valueOfHand)
                    console.log(player)

                for (let i = 0; i < hand.length; i++) {
                    if ((player.valueOfHand[0] > 21 && hand[i].rank === 'Ace') && hand[i].value === 11) {
                            hand[i].value = 1
                            this.getValueOfHandwithSplit(hand, player)
                    }
                }
                // return player.valueOfHand[0]
                }
                else if(blackjack.players[0].hand[0][0].isHandComplete === true) {
                    console.log(blackjack.players[0].valueOfHand)
                    player.valueOfHand[1] += valueOfCard
                    console.log(blackjack.players[0].valueOfHand)
                    console.log(player)

                    for (let i = 0; i < hand.length; i++) {
                        if ((player.valueOfHand[1] > 21 && hand[i].rank === 'Ace') && hand[i].value === 11) {
                            hand[i].value = 1
                            this.getValueOfHandwithSplit(hand, player)
                        }
                    }
                // return player.valueOfHand[1]

                }
            }
        }
    },

    determineCorrectValueInSplit(player) {
        if (blackjack.players[0].hand[0][0]) {
            if(blackjack.players[0].hand[0][0].isHandComplete === false){
                player.valueOfHand[0] = 0
                console.log(player)
        // console.log(`This is the value of Players hand: ${player.valueOfHand}`)
            }
            else if(blackjack.players[0].hand[0][0].isHandComplete === true) {
                player.valueOfHand[1] = 0
            }
        }
    },
    handleHitButtonInSplit() {
        if(blackjack.players[0].hand[0][0].rank === blackjack.players[0].hand[1][0].rank){
            console.log('We are in the split')
            if(blackjack.players[0].hand[0][0].isHandComplete === false){
                blackjack.players[0].hitCard(blackjack.deck, blackjack.players[0].hand[0])
                //This needs to hit a card and do essentially everything the standard is doing. 
                blackjack.getValueOfHandwithSplit(blackjack.players[0].hand[0], blackjack.players[0])

                if(blackjack.players[0].valueOfHand[0] > 21) {
                    console.log('That is a bust! End of turn!')
                    computerPrompts.innerHTML = 'That is a bust! On to the second hand.'
                    blackjack.completeHand(blackjack.players[0].hand[0])

                    console.log('End of first split')
                    console.log(blackjack.players[0].hand[0])
                }
                return
            }

            //THIS WILL FOCUS ON THE ONE INDEX OF THE SPLUT HAND 
            else if(blackjack.players[0].hand[0][0].isHandComplete === true){
                blackjack.players[0].hitCard(blackjack.deck, blackjack.players[0].hand[1])
                //This needs to hit a card and do essentially everything the standard is doing. 
                blackjack.getValueOfHandwithSplit(blackjack.players[0].hand[1], blackjack.players[0])
                
                if(blackjack.players[0].valueOfHand[1] > 21) {
                    console.log('That is a bust! End of turn!')
                    computerPrompts.innerHTML = `That is a bust! Dealer's turn`
                    blackjack.completeHand(blackjack.players[0].hand[0])
                    console.log('End of second split')
                    console.log(blackjack.players[0].hand[0])
                    blackjack.endATurn()
                    blackjack.startATurn()
                }


                console.log(blackjack.players[0].hand[0][0])
                //no the first hurdle is adjusting hitCard function in order to hit whatever hand I need
                return
            }
        }
    },
    startATurn () { //This function will let player know it is their turn and they can play
        if (this.currentplayersTurn === 0) {
            if(this.getValueOfHand(this.dealer.hand,this.dealer) === 21) {
                determineWinner()
                determineWinner()
                return
            }
            else if(this.getValueOfHand(this.players[0].hand, this.players[0]) === 21) {
                determineWinner()
                determineWinner()
                return
            }
        }
        //Increasing counter
        this.currentplayersTurn = this.currentplayersTurn+=1
        //Have a condition for the dealer
        if(this.currentplayersTurn === this.totalCardHolders) {
            console.log('it is the dealers turn') //Will need a function that allows the dealer to decide whether to hit or stand. 
            computerPrompts.innerHTML = `Dealer's turn`
            this.runDealersTurn()
            return
        }
        
            // Enabling buttons
            document.querySelector(`#player${this.currentplayersTurn}-stand-button`).disabled = false
            document.querySelector(`#player${this.currentplayersTurn}-hit-card-button`).disabled = false
            document.querySelector(`#player${this.currentplayersTurn}-split-card-button`).disabled = false

            console.log(this.players[0].hand)
            //Also include situation for if it is a split
            if(this.players[this.currentplayersTurn - 1].hand[0].rank !== this.players[this.currentplayersTurn - 1].hand[1].rank) {
                splitButton.disabled = true
            }
            // Highlighting area so player is aware it is their turn [We will make an console.log for now. Goal is to put this on the page]
            console.log(`It is player ${this.players[this.currentplayersTurn - 1].playerNumber}'s turn!`)
            // Player will then be able to take their turn
            computerPrompts.innerHTML = `It is ${this.players[this.currentplayersTurn - 1].name}'s turn!`
        
    
    },
    endATurn () {
        //Needs to disable buttons of player who's turn just happened. 
        console.log(blackjack.currentplayersTurn)
        document.querySelector(`#player${blackjack.currentplayersTurn}-hit-card-button`).disabled = true
        document.querySelector(`#player${blackjack.currentplayersTurn}-stand-button`).disabled = true
        document.querySelector(`#player${blackjack.currentplayersTurn}-split-card-button`).disabled = true
    
        // In the future, I would ideally like only 1 set of buttons for every player so I could think about making and appending buttons for every turn and removing old buttons. 
        //So this one would remove buttons, while start a turn adds new buttons
    
    },
    runDealersTurn () {
        if (blackjack.currentplayersTurn === blackjack.dealer.playerNumber) {
            blackjack.getValueOfHand(blackjack.dealer.hand, blackjack.dealer)
            blackjack.dealer.hand[1].isFaceup = true
            // this.determinefaceDown()
            console.log(blackjack.dealer.hand)
            if (blackjack.dealer.valueOfHand >= 17) {
                //If hand is greater than or equal to 17 we want to: 
                //Get the value of players and dealer
                console.log('The dealer stands!')
                console.log('The value of the dealers hand is:')
                console.log(blackjack.dealer.valueOfHand)
                console.log(`Dealer's hand:`)
                console.log(blackjack.dealer.hand)
                for(let i = 0; i < blackjack.players.length; i++) {
                    console.log(`The value of the player ${blackjack.players[i].playerNumber}'s hand is:`)
                    console.log(blackjack.players[i].valueOfHand)
                    console.log(`${blackjack.players[i].playerNumber}'s hand:`)
                    console.log(blackjack.players[i].hand)
                    determineWinner()
                }
                //we want to compare those values(This should be a separate function)
                    //Once compare, we determine a winner of round.
                    //Issue points to winner. 
                    //Points will be held inside the player object.
            }
            else { //If value of hand is lower than 16:
            
                blackjack.dealer.hitCard(blackjack.deck, blackjack.dealer.hand)  //We want to hit 
                blackjack.getValueOfHand(blackjack.dealer.hand, blackjack.dealer) //Get value of dealers hand
                console.log(`This is the value of the dealer's hand:`) //Console log dealers hand 
                console.log(blackjack.dealer.valueOfHand)
                console.log(`Dealer's hand:`)
                console.log(blackjack.dealer.hand)
                this.runDealersTurn()
            }
            
        }
        
    },
    completeHand (hand) {
        for (let i = 0; i < hand.length; i++) {
            hand[i].isHandComplete = true
        }
    },
    createCard(card) {
    
        //if the button is click: 
        // We will create a div that will hold the card image inside it as an image tag
        // This way if we need to split the cards they can be seperate. 
    
        // console.log(identifyCard(card.rank, card.suit))
        //Making image div container
        let newDiv = document.createElement('div')
        newDiv.className = 'playing-card-image-container'
    
        let newImage = document.createElement('img')
        newImage.src = `./images/${card.image}.png`
        newImage.alt = `${card.rank} of ${card.suit}`
        newImage.className = 'playing-card'
    
        let completeDiv = newDiv.appendChild(newImage)
        // return newDiv.appendChild(newImage)
        return completeDiv
    },
    appendCardsForSplit(card) {
        if(blackjack.players[0].hand[0][0]) {
            if(blackjack.players[0].hand[0][0].isHandComplete === false){
                let newDiv = document.createElement('div')
                newDiv.className = 'playing-card-image-container'
                newDiv.appendChild(blackjack.createCard(card))
                document.querySelector(`#split-div-0`).appendChild(newDiv)
            }
            else if(blackjack.players[0].hand[0][0].isHandComplete === true) {
                let newDiv = document.createElement('div')
                newDiv.className = 'playing-card-image-container'
                newDiv.appendChild(blackjack.createCard(card))
                document.querySelector(`#split-div-1`).appendChild(newDiv)
            }
        }
    }


}



//===================
// Determine a Winner
//===================

//Determine Winner Function 
function determineWinner () {
    // What needs to happen:
    //All players will be compared to the dealer seperately 
    // We will then determine if that players hand beats the dealers 
    // A point will be issued or taken away after that is determined

    //In splits we will need to compare both hands to the dealers

    blackjack.players.forEach(player =>{ 
        if(player.valueOfHand[1]) {
            player.valueOfHand.forEach(hand => {
                if ((hand > 21 && blackjack.dealer.valueOfHand > 21) || (hand === blackjack.dealer.valueOfHand)) {
                    console.log(player)
                    console.log('This hand is a draw! No points will be issued!') //No points issued 
                    computerPrompts.innerHTML = 'This hand is a draw! No points will be issued!'
                    dealerScore.innerHTML = blackjack.dealer.NumberOfWins
                    playerScore.innerHTML = player.NumberOfWins
                }
                else if(hand > 21 && blackjack.dealer.valueOfHand <= 21) {
                    console.log(player)
                    console.log('You lose this hand. The dealer gets a point and you lose a point.')
                    computerPrompts.innerHTML = `${player.name} lost this hand. The dealer gets a point and you lose a point.`
                    blackjack.dealer.NumberOfWins++
                    player.NumberOfWins--
                    dealerScore.innerHTML = blackjack.dealer.NumberOfWins
                    playerScore.innerHTML = player.NumberOfWins

                }
                else if(hand <= 21 && blackjack.dealer.valueOfHand > 21) {
                    console.log(player)
                    console.log(`${player.name} wins this hand The dealer loses a point and ${player.name} gets a point.`)
                    computerPrompts.innerHTML = `${player.name} wins this hand The dealer loses a point and ${player.name} gets a point.`
                    blackjack.dealer.NumberOfWins--
                    player.NumberOfWins++
                    dealerScore.innerHTML = blackjack.dealer.NumberOfWins
                    playerScore.innerHTML = player.NumberOfWins
                }
                else if (hand <= 21 && blackjack.dealer.valueOfHand <= 21) {
                    if (player.valueOfHand > blackjack.dealer.valueOfHand) {
                        console.log(player)
                        console.log(`${player.name} wins this hand! The dealer loses a point and ${player.name} gets a point.`)

                        computerPrompts.innerHTML = `${player.name} wins this hand! The dealer loses a point and ${player.name} gets a point.`
                        blackjack.dealer.NumberOfWins--
                        player.NumberOfWins++
                        dealerScore.innerHTML = blackjack.dealer.NumberOfWins
                        playerScore.innerHTML = player.NumberOfWins
                    }
                    else if(hand < blackjack.dealer.valueOfHand) {
                        console.log(player)
                        console.log(`${player.name} loses this hand! The dealer gets a point and ${player.name} loses a point.`)
                        blackjack.dealer.NumberOfWins++
                        player.NumberOfWins--
                        dealerScore.innerHTML = blackjack.dealer.NumberOfWins
                        playerScore.innerHTML = player.NumberOfWins
                    }
                }
                return
            })
        }
        if ((player.valueOfHand > 21 && blackjack.dealer.valueOfHand > 21) || (player.valueOfHand === blackjack.dealer.valueOfHand)) {
            console.log(player)
            console.log('This round is a draw! No points will be issued!') //No points issued 
            computerPrompts.innerHTML = 'This round is a draw! No points will be issued!'
        }
        else if(player.valueOfHand > 21 && blackjack.dealer.valueOfHand <= 21) {
            console.log(player)
            console.log('You lose this round. The dealer gets a point and you lose a point.')
            blackjack.dealer.NumberOfWins++
            player.NumberOfWins--
            computerPrompts.innerHTML = 'You lose this round. The dealer gets a point and you lose a point.'
            dealerScore.innerHTML = blackjack.dealer.NumberOfWins
            playerScore.innerHTML = player.NumberOfWins
        }
        else if(player.valueOfHand <= 21 && blackjack.dealer.valueOfHand > 21) {
            console.log(player)
            console.log(`${player.name} wins this round! The dealer loses a point and ${player.name} gets a point.`)
            blackjack.dealer.NumberOfWins--
            player.NumberOfWins++
            computerPrompts.innerHTML = `${player.name} wins this round! The dealer loses a point and ${player.name} gets a point.`
            dealerScore.innerHTML = blackjack.dealer.NumberOfWins
            playerScore.innerHTML = player.NumberOfWins
        }
        else if (player.valueOfHand <= 21 && blackjack.dealer.valueOfHand <= 21) {
            if (player.valueOfHand > blackjack.dealer.valueOfHand) {
                console.log(player)
                console.log(`${player.name} wins this round! The dealer loses a point and ${player.name} gets a point.`)
                blackjack.dealer.NumberOfWins--
                player.NumberOfWins++
                computerPrompts.innerHTML = `${player.name} wins this round! The dealer loses a point and ${player.name} gets a point.`
                dealerScore.innerHTML = blackjack.dealer.NumberOfWins
                playerScore.innerHTML = player.NumberOfWins
            }
            else if(player.valueOfHand < blackjack.dealer.valueOfHand) {
                console.log(player)
                console.log(`${player.name} loses this round! The dealer gets a point and ${player.name} loses a point.`)
                blackjack.dealer.NumberOfWins++
                player.NumberOfWins--
                computerPrompts.innerHTML = `${player.name} loses this round! The dealer gets a point and ${player.name} loses a point.`
                dealerScore.innerHTML = blackjack.dealer.NumberOfWins
                playerScore.innerHTML = player.NumberOfWins
            }
        }
   
  
    })
    return
}



//===================
// Start a New Round of the game
//===================
 const startNewRound = () => {
     blackjack.dealer.hand = []
     blackjack.players.forEach(player => player.hand = [])
     blackjack.players.forEach(player => player.isSplit = false)
     console.log(blackjack.dealer)
     console.log(blackjack.players[0])
     blackjack.dealCardsToStart(blackjack.deck)
     blackjack.roundsPlayed++
     blackjack.currentplayersTurn = 0
     blackjack.startATurn()
 }



//=============================
// BUTTONS AND EVENT LISTENERS
//=============================



 playAgainButton.addEventListener('click', () => {
    blackjack.dealer.removeCards()
    blackjack.players[0].removeCards()
    startNewRound()
 })



//Hit
// What is supposed to happen?
    // When button is pressed
    // It will run the hit function on that object 
    // It will then check the value of the object 
    // Present that new value AND new hand to the user

    hitButton.addEventListener('click', () => { // Hit button is associated to player 1
        console.log('Hit!')
        // console.log(blackjack.players[0].hand[0][0])

        // SPLIT FUNCTIONALITY
        //Conditional for when cards are split
        if (blackjack.players[0].hand[0][0]) {
            //FOR THE ZERO INDEX IN THE SPLIT HAND
            if(blackjack.players[0].hand[0][0].rank === blackjack.players[0].hand[1][0].rank){
                console.log('We are in the split')
                if(blackjack.players[0].hand[0][0].isHandComplete === false){
                    blackjack.players[0].hitCard(blackjack.deck, blackjack.players[0].hand[0])
                    blackjack.appendCardsForSplit(blackjack.players[0].hand[0][blackjack.players[0].hand[0].length - 1])
                    //This needs to hit a card and do essentially everything the standard is doing. 
                    blackjack.getValueOfHandwithSplit(blackjack.players[0].hand[0], blackjack.players[0])

                    if(blackjack.players[0].valueOfHand[0] > 21) {
                        console.log('That is a bust! End of turn!')
                        computerPrompts.innerHTML = 'That is a bust! On to second split.'
                        blackjack.completeHand(blackjack.players[0].hand[0])
                        console.log('End of first split')
                        console.log(blackjack.players[0].hand[0])
                        // blackjack.endATurn()
                        // blackjack.startATurn()
                    }
                    return
                }

                //THIS WILL FOCUS ON THE ONE INDEX OF THE SPLUT HAND 
                else if(blackjack.players[0].hand[0][0].isHandComplete === true){
                    blackjack.players[0].hitCard(blackjack.deck, blackjack.players[0].hand[1])
                    blackjack.appendCardsForSplit(blackjack.players[0].hand[1][blackjack.players[0].hand[1].length - 1])
                    //This needs to hit a card and do essentially everything the standard is doing. 
                    blackjack.getValueOfHandwithSplit(blackjack.players[0].hand[1], blackjack.players[0])
                    
                    if(blackjack.players[0].valueOfHand[1] > 21) {
                        console.log('That is a bust! End of turn!')
                        computerPrompts.innerHTML = `That is a bust! Dealer's turn`
                        blackjack.completeHand(blackjack.players[0].hand[0])
                        console.log('End of second split')
                        console.log(blackjack.players[0].hand[0])
                        blackjack.endATurn()
                        blackjack.startATurn()
                    }


                console.log(blackjack.players[0].hand[0][0])
                //no the first hurdle is adjusting hitCard function in order to hit whatever hand I need
                return
            }
        }
        // blackjack.handleHitButtonInSplit()
    }

        // It will run the hit function on that object 
        blackjack.players[0].hitCard(blackjack.deck, blackjack.players[0].hand) 

        // It will then check the value of the object 
        blackjack.getValueOfHand(blackjack.players[0].hand, blackjack.players[0])

        // Present that new value AND new hand to the user
        console.log(`The value of the player ${blackjack.players[0].playerNumber}'s hand is:`)
        console.log(blackjack.players[0].valueOfHand)
        console.log(`${blackjack.players[0].playerNumber}'s hand:`)
        console.log(blackjack.players[0].hand)
        if(blackjack.players[0].valueOfHand > 21) {
            console.log('That is a bust! End of turn!')
            computerPrompts.innerHTML = `That is a bust! Dealer's turn.`
            blackjack.endATurn()
            blackjack.startATurn()
        }
        
    
})



    
standButton.addEventListener('click', (e) => {
    if(blackjack.players[0].hand[0][0]) {
        if(blackjack.players[0].hand[0][0].rank === blackjack.players[0].hand[1][0].rank) { //***  VERY IMPORTANT CONDITONAL PHRASE
            //HANDLES STAND FOR INDEX 0 SPLIT CARD 
            if(blackjack.players[0].hand[0][0].isHandComplete === false){
                blackjack.getValueOfHandwithSplit(blackjack.players[0].hand[0], blackjack.players[0])
                blackjack.completeHand(blackjack.players[0].hand[0])
                console.log("Player chose to stand on split 1 of 2. We are moving on to split 2 of 2")
                computerPrompts.innerHTML = `${blackjack.players[0].name} chose to stand on split 1 of 2. We are moving on to split 2 of 2`
                // blackjack.startATurn()
                return
            }

            //HANDLES STAND FOR INDEX 1 SPLIT CARD 
            else if(blackjack.players[0].hand[0][0].isHandComplete === true){
                blackjack.getValueOfHandwithSplit(blackjack.players[0].hand[1], blackjack.players[0])
                blackjack.completeHand(blackjack.players[0].hand[0])
                console.log("Player chose to stand on split 2 of 2. End of turn.")
                computerPrompts.innerHTML = `${blackjack.players[0].name} chose to stand on split 2 of 2. Dealer's turn`
                blackjack.endATurn()
                blackjack.startATurn()
                return
            }

        }
    }
    computerPrompts.innerHTML = `Dealer's turn`
    blackjack.completeHand(blackjack.players[0].hand)
    blackjack.endATurn()
    blackjack.startATurn()

})

//Split
 // What needs to happen
 // When player has 2 cards that are the same they are given the option to split them
 // When pressed:
 // 1 card is taken out of hand and added into a new array and this value is added to splithand key
 // Player then goes through normal options on the first card in their hand 
 // Once the stand or bust on the first hand, they are able to move to the second hand and do the same
 // Once the player stands or bust on the second hand, we then move to the next player
    
    
//Split Button will only control splitting the cards
//Conditon added to the start turn function will go through the split conditions 
 splitButton.addEventListener('click', () => {
    console.log('Split!')
    blackjack.players[0].handleSplitOnDom()

    for(i = 0; i < blackjack.players[0].hand.length; i++) {
        if(blackjack.players[0].hand[0].rank === 'Ace') {
            blackjack.players[0].hand.forEach(ace => ace.value = 11)
        }
        let splitCard = blackjack.players[0].hand.pop()
        console.log(splitCard)
        blackjack.players[0].hand.unshift([])
        console.log(blackjack.players[0].hand)
        blackjack.players[0].hand[0].push(splitCard)
        blackjack.players[0].valueOfHand = [0, 0]
        console.log(blackjack.players[0].valueOfHand)
        
    }
    blackjack.players[0].isSplit = true
    // console.log(splitCard)
    // blackjack.players[0].hand.push(splitCard)
    console.log(blackjack.players[0])
})
    


//====================

nameButton.addEventListener('click', () => {
    nameButton.disabled = true
    blackjack.startGame()
    blackjack.dealCardsToStart(blackjack.deck)
    blackjack.startATurn()
})



