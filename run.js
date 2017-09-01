'use strict';
global.window = global.document = global;

require('./Comm');
var comm = new Comm();


comm.sendQuery("http://www.google.com",function(){
	
	let ele = this.$._root;
	let dom = [];

	
	mapDom(dom,[ele]);
	printDom(dom);
});

function mapDom(dom,elements){
	
	for (let ele of elements){
		let temp = {};
		temp.type = ele.type;
		temp.name = ele.name;
		temp.nodes = [];
		
		if (ele.children !== undefined)mapDom(temp.nodes,ele.children);

		dom.push(temp);
	};
};

function printDom(dom,indent){
	if (indent === undefined)indent = 0;
	
	var tab = "";
	for (let i = 0; i < indent; i++)tab=tab + ". "
	
	for (let root in dom){
		console.log(tab+dom[root].name);
		
		indent++;
		printDom(dom[root].nodes,indent);
		indent--;
	}
};


