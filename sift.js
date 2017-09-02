'use strict';

var Page = class Page {
	constructor($){
		
		let dom = [];
		
		this.mapDom(dom,[$._root]);
		
		this.$ = $;
		this.dom = dom;
		
		this.printDom(this.dom);
	};
	
	mapDom(node,elements){
		for (let ele of elements){
			
			let temp = {};
			temp.type = ele.type;
			temp.name = ele.name;
			temp.nodes = [];
			
			if (ele.children !== undefined)this.mapDom(temp.nodes,ele.children);

			node.push(temp);
		};
	};
	
	printDom(node,indent){
		if (indent === undefined)indent = 0;
		
		var tab = "";
		for (let i = 0; i < indent; i++)tab=tab + ". "
		
		for (let root in node){
			console.log(tab+node[root].name);
			
			indent++;
			this.printDom(node[root].nodes,indent);
			indent--;
		}
	};
	
};





var Sift = class Sift {
	constructor(){
		
		
		this.pages = {};
	};
	
	addPage(name,$){
		this.pages[name] = new Page($);
	};
	
};





module.exports = global.Sift = Sift;




