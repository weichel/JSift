'use strict';
global.window = global.document = global;

require('./comm');
require('./data');
require('./card');
require('./engine');

let comm = new Comm();
let data = new Data();

let card = new Card({id:0,name:0});
let stack1 = new Stack({cards:[card]});


for (let i = 1; i < 20; i++){
  stack1.add(new Card({id:i,name:i}));
}
stack1.randomize();


let stack2 = new Stack({});


for (let i = 1; i < 20; i++){
  stack2.add(new Card({id:i,name:i}));
}
stack2.randomize();

stack1.combine(stack2,0);

stack1.randomize();
for (let j = 1; j < stack1.cards.length; j++){
  console.log(stack1.cards[j].name);
}
