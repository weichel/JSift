'use strict';
global.window = global.document = global;

require('./comm');
require('./data');
require('./sift');

let comm = new Comm();
let data = new Data();
let sift = new Sift();



comm.sendQuery("http://www.google.com",function(){

	let page = sift.addPage("http://www.google.com",this.$);

	data.newRecord("http://www.google.com",page);


});
