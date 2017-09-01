'use strict';
global.window = global.document = global;



require('./Comm');

var comm = new Comm();



comm.SendQuery("http://www.google.com",function(){
	
	console.log(this.$);
});

