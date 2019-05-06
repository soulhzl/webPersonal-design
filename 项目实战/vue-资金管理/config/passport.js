const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const model = require('../config/mongodb');
const config = require('../config/config');
const User = model.getModel('user');
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = config.secretOrKey;

module.exports = passport => {
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		User.findById(jwt_payload.id, (err, doc) => {
			if (err) {
				return done(err, false);
			}
			if (doc) {
				return done(null, doc);
			} else {
				return done(null, false);
			}
		})
	}));
}