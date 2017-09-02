'use strict';


/* =======================================================
				HTTP Server Class
				 - Uses Express HTTP Routing
				 - Uses Socket.IO Server
======================================================= */
var Server = class Server {
	constructor(directory,port){
		
		//=== Requires ===//
		let express = require('express')
		, 	cons = require('consolidate')
		, 	crypto = require('crypto')
		, 	fs = require('fs')
		, 	bodyParser = require('body-parser')
		, 	cookieParser = require('cookie-parser')
		, 	httpreq = require('http')
		, 	session = require('express-session')
		, 	io = require('socket.io')
		, 	mongoStore = require('connect-mongo/es5')(session);
		
		
		//=== Create HTTP Server ===//
		let http = express();
		http.server = httpreq.createServer(http);
		http.use(express.static(__dirname + directory));
		
		
		//=== Create HTTP Routing ===//
		let router = express.Router();
		router.get('/', function(req,res){
			res.render('index.html');
		}.bind(this));
		
		
		//=== Create Socket.IO Server ===//
		let sock = io(http.server);
		sock.on('connection', function(socket){
			console.log("connected" + socket.request.connection._peername.address);

			socket.on('disconnect',function(){
				console.log("disconnected");
			}.bind(this));
				
		}.bind(this));
		
		
		//=== Start Server ===//
		http.use('/',router);
		http.server.listen(port);
		
		//=== Register Properties ===//
		this.http = http;
		this.router = router;
		this.sock = sock;
		this.directory = directory;
		this.port = port;
	};

};

/* =======================================================
				HTTP Query Class
				 - Uses Request HTTP Client
======================================================= */
var Query = class Query {
	constructor(url,cb){
		
		//=== Requires ===//
		let request = require('request')
		, 	cheerio = require('cheerio');
		
		
		//=== Send Query ===//
		request(url, function(err, res, html){
			this.err = err;
			this.res = res;
			this.html = html;
			this.$ = cheerio.load(html);
			
			cb.bind(this)();
		}.bind(this));
		
		//=== Register Properties ===//
		this.url = url;
	};
};


	


var Comm = class Comm {
	constructor(){
		
		this.server = null;
		this.query = {};
	};
	
	initServer(directory,port){
		this.server = new Server(directory,port);
		
	};
	
	sendQuery(url,cb){
		this.query[url] = new Query(url, cb);
		
	};
};







module.exports = global.Comm = Comm;








