// 事件收发
var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('evn', function(){
	console.log('evnaaa');
});

emitter.emit('evn');