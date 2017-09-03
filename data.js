
'use strict';



var Data = class Data {
	constructor(){
		//=== Requires ===//
		let mongojs = require('mongojs');

		//=== Register Properties ===//

		this.db =  mongojs('data', ['pages']);

	};


	newRecord(key,record,safe){

		if (safe){
			this.db.pages.find( { _id: 'abc' }, function(err,docs){
				if (docs.length==0)this.db.pages.save({_id: key, record: record});
			});
		}else this.db.pages.save({_id: key, record: record});
	};

};

//this.db.pages.find({ _id: key }, function(...) { ... });




//db.queries.save({created: 'just now'});
/*
db.queries.find(function (err, docs) {
	console.log(docs);
	db.close();
});

db.queries.remove({});

*/

module.exports = global.Data = Data;
