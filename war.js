console.log("Welcome to the War Game");

// Think about how you would build this project and write your plan down. Consider classes such as: 
// Card, Deck, Player, as well as what properties and methods they may include.
// You do not need to accept any user input, when you run your code, the entire game should play 
// out instantly without any user input inside of your browser's console.

// Deal 26 Cards to each Player from a Deck of 52 cards.   //introduce the player1 and player2, deal one card til each player has 26 cards equaling 52
// Iterate through the turns where each Player plays a Card.  //look up methods that iterate each element/ item
// The Player who played the higher card is awarded a point.   //comparison symbol to see who wins the point, winner += 1
// Ties result in zero points for both Players. //player1 === player2 = "no point due to draw"
// After all cards have been played, display the score and declare the winner. // return the points with the winner that had the most



// There are suits, values, 

let values = [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14];
let suits = ['spades', 'hearts', 'diamonds', 'clubs'];

    class cards{
        constructor(newCards) {
            this.newCards = []

            for(let i = 0; i < suits.length; i++) {
                for(let j = 0; j < values.length; j++ ) {
                    let cardObject = {}; // created the for loops to make key-pair values for the empty object to then 
                        cardObject[suits[i]] = values[j];
                        this.newCards.push(cardObject);
                }
            }
        }
        shufflesCards() { // randomize the arrays


            for(let i = this.newCards.length - 1; i >= 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1));
                const temp = this.newCards[i];
                this.newCards[i] = this.newCards[randomIndex];
                this.newCards[randomIndex] = temp;        
            }
            return this.newCards;
        } 

        splitDeck() {
            let firstHalf = this.newCards.slice(0, 26);
            let secondHalf = this.newCards.slice(26);

            return [firstHalf, secondHalf];
        }
    }




    class Game {
        constructor(player1, player2, score1, score2) {
            this.player1 = player1
            this.player2 = player2 
            this.score1 = score1;
            this.score2 = score2;



        } 
            gameTime() {
                for(let i = 0; i < this.player1.length; i++) { 

                if(this.player1[i] > this.player2[i]) {
                    this.score1++;
                    console.log("Player 1 wins this round!!!");

                } else if(this.player2[i] > this.player1[i]) {
                    this.score2++
                    console.log("Player 2 wins this round!!!");

                } else{
                        console.log("Tie, onto the next one....")
                }
            }
        }
            
            winner() {
                if(this.score1 > this.score2) {
                    console.log("Player one has won the game")
                } else if(this.score2 > this.score1) {
                    console.log("Player two has won the game.")
                } else {
                    console.log("Tie, no winner.")
                }
            }
        }

    
let gameOne = new cards;
gameOne.shufflesCards();
let [firstHalf, secondHalf] = gameOne.splitDeck();

let game = new Game(firstHalf, secondHalf, 0, 0);
game.gameTime();
game.winner();





    

    
    