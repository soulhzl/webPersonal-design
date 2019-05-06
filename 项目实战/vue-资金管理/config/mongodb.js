const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/mymoney';

mongoose.connect(DB_URL, {
	useNewUrlParser: true,
	useFindAndModify: false
});

const models = {
	user: {
		'name': {
			type: String,
			'require': true
		},
		'password': {
			type: String,
			'require': true
		},
		'email': {
			'type': String,
			'require': true
		},
		'avatar': {
			'type': String
		},
		'identity': {
			'type': String,
			'require': true
		},
		'date': {
			'type': Date,
			'default': Date.now
		}
	},
	profile: {
		'type': {
			'type': String
		},
		'descripe': {
			'type': String
		},
		'income': {
			'type': String,
			'require': true
		},
		'expend': {
			'type': String,
			'require': true
		},
		'cash': {
			'type': String,
			'require': true
		},
		'remark': {
			'type': String
		},
		'date': {
			'type': Date,
			'default': Date.now
		}
	}
}

for (let m in models) {
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel: function(name) {
		return mongoose.model(name)
	}
}