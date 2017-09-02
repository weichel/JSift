
'use strict';



var Data = class Data {
	constructor(collections){
		//=== Requires ===//
		let mongojs = require('mongojs');
		
		//=== Register Properties ===//
		this.collections = collections;
		this.db =  mongojs('data', collections);
		
	};
	

};






//db.queries.save({created: 'just now'});
/*
db.queries.find(function (err, docs) {
	console.log(docs);
	db.close();
});

db.queries.remove({});

*/

module.exports = global.Data = Data;

