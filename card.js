'use strict';

var Card = class Card {
  constructor(data){

    this.id = data.id;
    this.name = data.name;			 //Name of the card
    this.type = data.type;		     //Type of the card
	this.cost = data.cost;			 //Cost to play the card
	this.health = data.health;		 //Total health of the card
    this.abilities = data.abilities; //List of abilities
  }


};


var Ability = class Card_Ability {
  constructor(data){
    this.id = data.id;
    this.name = data.name;
	this.type = data.type;

  }
};




var Stack = class Card_Stack {
  constructor(data){
    if (typeof data.cards != 'undefined')this.cards = data.cards;
    else this.cards = [];

    //this.index = data.index;
  };

  // RANDOMIZE THE STACK OF CARDS
  randomize(){
    let l = this.cards.length, i, c;

    while (l) {
      i = Math.floor(Math.random() * l--);

        c = this.cards[l];
        this.cards[l] = this.cards[i];
        this.cards[i] = c;
    }
  };
  // ADDS A CARD TO THE STACK
  //    card - card object to add
  //    index - position to add card to, -1 for end
  add(card,index){
    if (inxex != -1)this.cards.splice(index, 0, card);
    else this.cards.unshift(card);
  };

  // ADDS A STACK TO THE STACK
  //    stack - stack object to add
  //    mode - 0 to add to top, 1 to add to bottom
  combine(stack,index){
    if (mode)this.cards.concat(stack.cards);
    else this.cards = stack.cards.concat(this.cards);
  };

};









module.exports.Card = global.Card = Card;
module.exports.Ability = global.Ability = Ability;
module.exports.Stack = global.Stack = Stack;
