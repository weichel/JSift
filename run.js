'use strict';
global.window = global.document = global;

require('./comm');
require('./data');
require('./sift');

let comm = new Comm();
let data = new Data();
let sift = new Sift();



comm.sendQuery("http://www.google.com",function(){
	
	sift.addPage("http://www.google.com",this.$)
	
});


