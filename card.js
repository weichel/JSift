var Card = class Card {
  constructor(data){

    this.id = data.id;
    this.name = data.name;
    this.class = data.class;
    this.type = data.type;
    this.abilities = data.abilities;
  }


};


var Ability = class Card.Ability {
  constructor(data){
    this.id = data.id;
    this.name = data.name;

  }
};
