var util = require('util');

function Base(){
	this.name = 'base';
	this.age = 12;
	this.sayName = function(){
		console.log(this.name);
	};
}

Base.prototype.sayHaha = function(){
	console.log('haha' + this.name);
};

function Sub(){
	this.name = 'sub';
}

util.inherits(Sub, Base);
var obj = new Base();
obj.sayName();
obj.sayHaha();
console.log(obj);
var subobj = new Sub();
subobj.sayHaha();
console.log(subobj);
