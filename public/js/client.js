class Player {
	constructor(color) {
			this.pieces = null;
			this.color = color;
			this.canCastle = false;
			this.isInCheck = false;
			this.isCheckmate = false;
			this.username = "";
		}
}

class GameSpace {
	constructor(i,j) {
		this.row = i;
		this.column = j;	
		this.color = function() { //white = 1
			var row = isOdd(i);
			var col = isOdd(j);
			if (row && col) {
				return 0;
			}
			else if (row || col) {
				return 1;
			}
			else {
				return 0;
			}
		}
		this.isInCheck = false;
		this.threateningPieces = null;
		this.occupiedBy = null;
	}
}

class GameBoard {
	constructor() {
		this.spaces = new Array(8);
		for (var i=1; i<9; i++) {
			this.spaces[i] = new Array(8);
			for (var j=1;j<9; j++) {
				this.spaces[i][j] = new GameSpace(i,j)
			}
		}
	}
	
	// look at each piece threatening king space:
		// record spaces threatening check based on type of piece
	// for each piece threatening check:
		// add to array
	// for each home piece, record spaces it can move to:
		// add to array 2
	// cross reference array and array 2
		// if array 2 member can occupy an array 1 space to block
			// check if move induces check (look at threats)
				// if induces check - fail
	//succeed
			
	
	intializeBoard : function(white, black) {
		for (var j=1; j<9; i++) {
			this.spaces[2][j].occupiedBy = new Pawn(white);
			this.spaces[7][j].occupiedBy = new Pawn(black);
		}
		
		// White Rooks
		this.spaces[1][1].occupiedBy = new Rook(white);
		this.spaces[1][8].occupiedBy = new Rook(white);
		// Black Rooks
		this.spaces[8][1].occupiedBy = new Rook(white);
		this.spaces[8][8].occupiedBy = new Rook(white);
		
		// White Knights lel
		this.spaces[1][2].occupiedBy = new Knight(white);
		this.spaces[1][7].occupiedBy = new Knight(white);
		// Black Knights 
		this.spaces[8][2].occupiedBy = new Knight(black);
		this.spaces[8][7].occupiedBy = new Knight(black);
		
		// White Bishops
		this.spaces[1][3].occupiedBy = new Bishop(white);
		this.spaces[1][6].occupiedBy = new Bishop(white);
		// Black Bishops
		this.spaces[8][3].occupiedBy = new Bishop(black);
		this.spaces[8][6].occupiedBy = new Bishop(black);
		
		// White Queen
		this.spaces[1][5].occupiedBy = new Queen(white);
		// Black Queen 
		this.spaces[8][5].occupiedBy = new Queen(black);
		
		// White King
		this.spaces[1][4].occupiedBy = new King(white);
		// Black King
		this.spaces[8][4].occupiedBy = new King(black);
		
	}
)

class GameEngine {
	this.player1 = new Player();
	this.player2 = new Player();
	this.board = new GameBoard();
	this.board.initializeBoard();
}


$(document).ready(function(){
	
	alert(1);
	
	var socket = io();

	socket.on('page', function(page){

	});
	
	//socket.emit('map');
	
	socket.on('map', function(map){

	});
	
});