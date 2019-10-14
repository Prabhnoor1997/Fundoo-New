/******************************************************************************
 * Execution    :   default node            terminal> node cards.js
 * 
 * Purpose      :   To shuffle cards and distribute 36 cards in 4 players.json
 *            
 * 
 * @description
 * git push 
 * @file        :   cards.js
 * @overview    :   Cards are shuffled and each player is given 9 cards 
 * @author      :   Prabhnoor Singh prabhnoor.parry@gmail.com
 * @version     :   1.1
 * @since       :   04-09-2019
*******************************************************************************/

class Card {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
    getType() {
        return this.type;
    }
    getValue() {
        return this.value;
    }
}


class Player {
    constructor(cards) {
        this.cards = cards;
    }

   sort() {
        var newArr = [];
        for(var j=0;j < this.cards.length;j++){
            var smallest = new Card(4, 13);
            var smallestindex=13;
            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i] != null && this.cards[i].value < smallest.value ) {
                    // if (this.cards[i].value < smallest.type) {
                        smallest = this.cards[i];
                        smallestindex=i;
                   // }
                }

                //console.log("---"+smallest.type,smallest.value);
            }
            this.cards[smallestindex]=null;
            if(smallest.value != 13)
            newArr.push(smallest);
            
        }
        this.cards=newArr;
        return true;

    }

    displaycards(){
        var arrType=['♠','♣' , '♦' , '♥' ];
        var arrValue=['Ace','1','2','3','4','5','6','7','8','9','Jack','Queen','King'];
        var dataStructObj=require('../data_structures/dataStructures');
        var queueObj=new dataStructObj.Queue;
        for(var i=0;i<this.cards.length;i++){
            queueObj.enqueue(this.cards[i]);
        }
        for(var i=0;i<9;i++){
            var singleCard=queueObj.dequeue();
            console.log(arrType[singleCard.type],arrValue[singleCard.value]);
        }
    }
}  

function mainFunc()
{
deckArr = [];
while (1) {
    var colour = Math.floor(4 * Math.random());
    var number = Math.floor(13 * Math.random());
    var card = new Card(colour, number);
    var check = 1;

    for (var i = 0; i < deckArr.length; i++) {
        if (deckArr[i].type == colour && deckArr[i].value == number) {
            check = 0;
            break;
        }
    }
    if (check == 0)
        continue;
    deckArr.push(card);

    if (deckArr.length == 52)
        break;
}
var player1Arr = [];
var player2Arr = [];
var player3Arr = [];
var player4Arr = [];


for (var i = 0; i < 36; i++) {

    if (i / 9 >= 3) {
        player1Arr.push(deckArr[i]);
        continue;
    }
    if (i / 9 >= 2) {
        player2Arr.push(deckArr[i]);
        continue;
    }
    if (i / 9 >= 1) {
        player3Arr.push(deckArr[i]);
        continue;
    }
    if (i / 9 >= 0) {
        player4Arr.push(deckArr[i]);
        continue;
    }
}
    var player1 = new Player(player1Arr);
    var arr=player1.sort();
    player1.displaycards();
    var player2 = new Player(player2Arr);
    var player3 = new Player(player3Arr);
    var player4 = new Player(player4Arr);
}  
    

mainFunc();