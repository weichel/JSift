'use strict';
global.window = global.document = global;

require('./comm');
require('./data');
require('./card');

let comm = new Comm();
let data = new Data();



let card = new Card();
