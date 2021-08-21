# Blackjack-Game

Also known as Twenty-One, Blackjack is known as one of the most popular and attractive casino card games due to its simplicity and approachability to even the novice player. The objective of Blackjack is through the use of a 52-card pack(we use a 6-deck game), for each player to attempt to beat the dealer. This is done by getting as close to 21 as possible, without going over 21.  

In the game, aces are worth 1 or 11, face cards are worth 10 and numbered cards are worth their value(eg. 2 of Hearts = 2). As this is a game played in casinos, bets are typically made on each hand. For the sake of simplicity, this game does not feature bets, at this time. 

## Why I Made It

I typically am not someone who gambles often or is saavy with most card games. I, however, have even found Blackjack to be a fun and approachable game to play and if I were to go to a casino it is even my first choice of game to play. Blackjack although simple in nature, has a lot of moving part that in real life, the dealer or player is typically responsible for. These things include counting, dealing, decisions, on the best possible move in certain situations, and managing the houses rules of play. 

I thought this would be a fun way of solidifying my knowledge of JavaScript and a lot of the concepts involved in using objects and object-oriented programming. Doing a game like Blackjack also allows for a lot of feature updates in order to expand and make the game more robust.

## Wireframes
![Screen Shot 2021-08-10 at 8 43 04 PM](https://user-images.githubusercontent.com/25748411/130321414-475382be-7ab0-48cb-8c28-4b886f59bcc6.png)
![Screen Shot 2021-08-10 at 8 34 40 PM](https://user-images.githubusercontent.com/25748411/130321487-2a4452c6-9092-4386-a64c-df4606bd37b2.png)

Above are my wireframes for my game. Admittedly, I will say as of now, my game does not look like the images. In looking to make the game more single-player at the moment, I decided to move a lot of the displays and butttons around to make better use of the negative space. In future iterations of the game, I will look to update the game to be a better representation of the wireframes shown. 

## User Stories 

### MVP Goals
- As a player, I want the game to recognize when a player wins a hand
- As a player, I want the game to recognize when a player goes over 21
- As a player, I want the game to allow players the ability to hit
- As a player, I want to the game to allow players the ability to split pairs
  - If player splits cards, they must play through both hands before moving to the next player or dealer
- As a player, I want to the player to stand
- As a player, I would like to know when it is my turn to make a move
- As a player, I would like to be able to compete against the dealer
- As a player, I would like the cards to be automatically shuffled
- As a player, I would like the dealer to use at least 2 decks.
- As a player, I would like to not be able to easily count the cards
- As a player, I would like the dealer to deal the cards
- As a player, if the dealer's total is 17 or more, they must stand
- As a player, if the dealer's total is 16 or less, the must hit until they get to a value over 17
- As a player, I would like the computer to keep track of wins and losses.
- As a player, I would like a UI that is easy to understand and appealing that adds to the experience.
- As a player, I would like the cards to be presented on the UI

### Stretch Goals

#### Bets/Gambling
- As a player, I would like to be able to gamble with virtual money
- As a player, I would like the Min/Max of bets to be $2 - $500
- As a player, I would like to place bets before dealing
- As a player, If I split my cards, an equal bet must be place on the other hand
- As a player, is my original 2 card total equals 9, 10, or 11, I would like to be able to double down
- As a player, when I double down, I would like to double my bet
- As a player, when I double down, I would like to receive 1 facedown card from the dealer that isn't turned up until the end of the hand
- As a player, I would like there to be a set amount of money that players start with

#### Other Strerch Goals 
- As a player, I would like to be able to compete with multiple players(up to 4)(excluding the dealer computer)
- As a player, I would like there to be motion when passing out the cards
- As a player, I would like there to be little tutorials on what everything means(ie. stand, double down, hit, split, etc)

## Technologies Used

1. HTML
2. CSS
3. JavaScript

## Approach 

I approach building this game through the use of Classes and objects. My game logic, is mostly housed inside of 1 game object that containers multiple key:value pairs to hold the logic and store values necessary for the game to function. 

In order to be able to build this out for multiplayer action in the future, I decided to use classes in order to store player logic and allow for multiple players to be create in the future, with their own unique player number and name.  

![Screen Shot 2021-08-21 at 8 38 31 AM](https://user-images.githubusercontent.com/25748411/130322070-6e167764-4007-48cb-901c-8d3ebc78bc4e.png)
Above is the Dealer class that posses most of the player logic

![Screen Shot 2021-08-21 at 8 39 32 AM](https://user-images.githubusercontent.com/25748411/130322093-f4a9c891-c680-4461-8d4c-f7bf30e21899.png)
A Player Class extends from the dealer in order to utitlize a majority of the dealers logic. Functionality for splitting cards was added to the player class as the dealer can only hit or stand. 

Buttons are primarily used to activate most of the function in the game. Player start the game by inputting their name. Once the submit button is clicked, the game begins and players can choose what they like to do through clicking on the button associated with their choice in move. 

<img width="1427" alt="Screen Shot 2021-08-21 at 8 44 42 AM" src="https://user-images.githubusercontent.com/25748411/130322203-6e09783f-d720-4c17-9fc0-4252a88c1bfe.png">

## Unsolved Problems

Some of my unsolved problems include:

1. Handling hands with multiple Aces
2. Getting dealers second card to be facedown and flip once it is their turn 

## Forthcoming Features

In the future, I would like to add the following features:

1. Ability to have multiple players play
2. Ability to gamble and place bets 
3. More indication on the screen of whose turn it is and the moves they can make
4. Ability for the deck to be randomly re-shuffled after a certain point
5. Improvements on the overall UI and layout of the game
6. Addition of animations to represent passing and flipping cards


