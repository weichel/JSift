'use strict';

//Engine class. This runs all the player game servers and menus. No cheaters, the server always wins. 
var Engine = class Engine {
  constructor(data){

  };
};






var Deck = class Engine_Deck {
  constructor(data){
    this.stack = data.stack;
  };
};





var Library = class Engine_Library {
//The library class creates card objects. 
	constructor(data){
		
		
	};
	
	card(id){
		
		switch(id){
			
			
			case "1":
				var o = Card({ 
								id: "1",
								name: "Marketplace",
								type: "Building",
								cost: "CC"
								health: 2,
								abilities: [ [1, 1] ],
				});
				
				break;
			case "2":
				var o = Card({ 
								id: "2",
								name: "Parts Factory",
								type: "Building",
								cost: "MM",
								health: 2,
								abilities: [ [2, 1] ],
				});
			
				break;
			
			default:
	};
	
	
	ability(id,magnitude){
		switch(id){
			case 1: //
			
				break;
			case 2: //
				
				break;
			case 3: //
				
				break;
		};
	};
};






module.exports = global.Engine = Engine;
