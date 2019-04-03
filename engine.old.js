'use strict';

//Engine class. This runs all the player game servers and menus. No cheaters, the server always wins. 
var Engine = class Engine {
  constructor(data){

  };
};

var Game_Server = class Engine_Game_Server {
  constructor(data){
    
  };
	
};

var Menu = class Engine_Menu {
	constructor(data){
		
	};
};












var Deck = class Engine_Deck {
  constructor(data){
    this.stack = data.stack;
  };
};

var Hand = class Engine_Hand {
  constructor(data){
    this.stack = data.stack;
  };
};

var Recycle = class Engine_Recyle {
  constructor(data){

  };	  
};


var Combat = class Engine_Combat {
  constructor(data){
	  
  };
};

























var Library = class Engine_Library {
//The library class creates card objects. 
	 
	 
	constructor(data){
		
		
		
		
	};
	
	card(id){
		
		switch(id){
			
			
			// ****** STRUCTURES ****** //
			
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
			case "3":
				var o = Card({ 
								id: "3",
								name: "Solar Panels",
								type: "Building",
								cost: "PP",
								health: 2,
								abilities: [ [3, 1] ],
				});
			
				break;
				
				
			case "4": 
				var o = Card({ 
								id: "4",
								name: "Young Soldier",
								type: "Soldier",
								cost: "1C",
								health: 1,
								abilities: [ [4, 1], 
											 [5, 1]	],
				});
			
				break;
				
			case "5": 
				var o = Card({ 
								id: "5",
								name: "Healer Drone",
								type: "Robot Soldier",
								cost: "PC",
								health: 2,
								abilities: [ [5, 1]
											 [6, 1],
				});
			
				break;
				
			case "6": 
				var o = Card({ 
								id: "6",
								name: "Door Guard",
								type: "Soldier",
								cost: "1C",
								health: 2,
								abilities: [ [5, 2] ],
				});
			
				break;
				
			case "7": 
				var o = Card({ 
								id: "7",
								name: "Sharpshooter",
								type: "Soldier",
								cost: "2C",
								health: 1,
								abilities: [ [7, 1], ],
				});
			
				break;
				
			case "8": 
				var o = Card({ 
								id: "8",
								name: "Basic Infantry",
								type: "Soldier",
								cost: "2C",
								health: 2,
								abilities: [ [4, 2] ],
				});
			
				break;
			case "9": 
				var o = Card({ 
								id: "9",
								name: "Paratrooper",
								type: "Soldier",
								cost: "1PC",
								health: 2,
								abilities: [ [4, 1],
											 [8, 1]  ],
				});
			
				break;
				
			case "10": 
				var o = Card({ 
								id: "10",
								name: "Tank Duo",
								type: "Soldier",
								cost: "2MC",
								health: 3,
								abilities: [],
				});
			
				break;		
				
			case "11": 
				var o = Card({ 
								id: "11",
								name: "Clifford's Followers",
								type: "Soldier",
								cost: "1CC",
								health: 2,
								abilities: [], // 1/1 heals self whenever dealing damage
				});
			
				break;		
				
			case "12": 
				var o = Card({ 
								id: "12",
								name: "War Captain",
								type: "Soldier",
								cost: "PMC",
								health: 2,
								abilities: [], //All Soldiers gain 1/1 attack and defense ability
				});
			
				break;	
				
			case "13": 
				var o = Card({ 
								id: "13",
								name: "Long 9's",
								type: "Soldier",
								cost: "2PM",
								health: 2,
								abilities: [], // 2/0 long range attack
				});
			
				break;	
				
			case "14": 
				var o = Card({ 
								id: "14",
								name: "Clifford The Blood General",
								type: "Unique Soldier",
								cost: "2CC",
								health: 3,
								abilities: [], //2/2 heals self whenever dealing damage
											   //
				});
			
				break;		
			case "15": 
				var o = Card({ 
								id: "15",
								name: "Experimental Exosuit",
								type: "Unique Soldier",
								cost: "PPP",
								health: 4,
								abilities: [], //2/2, 4/4 if only unit you control
											   //
				});
			
				break;	
			case "16": 
				var o = Card({ 
								id: "16",
								name: "Barracks",
								type: "Building",
								cost: "2C",
								health: 3,
								abilities: [], //Whenever a soldier enters or leaves play, get a C
				});
			
				break;	
			case "17": 
				var o = Card({ 
								id: "17",
								name: "Trade Center",
								type: "Building",
								cost: "MCC",
								health: 3,
								abilities: [], //pay 4: draw a card
				});
			
				break;			
			case "18": 
				var o = Card({ 
								id: "18",
								name: "Omega Robotics Corperation",
								type: "Unique Building",
								cost: "MMPPCC",
								health: 5,
								abilities: [], // Every turn create a 2/2 Robot Soldier
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
			case 4: // Adjacent Offensive Combat
				
				break;
			case 5: // Defensive Combat
				
				break;
			case 6: // Adjacent Heal Soldier
				
				break;
			case 7: // Ranged Offensive Combat
				
				break;
			case 8: // Unlimited Move Lenth
				
				break;
			
		};
	};
};






module.exports = global.Engine = Engine;
