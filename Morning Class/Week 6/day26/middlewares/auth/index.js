const passport = require('passport'); // Import passport
const LocalStrategy = require('passport-local').Strategy; // Login but not using likes Google Login, Facebook Login
const bcrypt = require('bcrypt'); // to compare the password
const JWTstrategy = require('passport-jwt').Strategy; // to enable jwt in passport
const ExtractJWT = require('passport-jwt').ExtractJwt; // to extract or read jwt
const { user } = require('../../models'); // Import user

// Logic to signup
exports.signup = (req, res, next) => {
  passport.authenticate('signup', { session: false }, (err, user, info) => {
    if (err) {
      return next({ message: err.message, statusCode: 401 });
    }

    if (!user) {
      return next({ message: info.message, statusCode: 401 });
    }

    req.user = user;

    next();
  })(req, res, next);
};

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const data = await user.create(req.body);

        return done(null, data, { message: 'User can be created' });
      } catch (e) {
        return done(e, false, { message: "User can't be created" });
      }
    }
  )
);

// Logic to signin
exports.signin = (req, res, next) => {
  passport.authenticate('signin', { session: false }, (err, user, info) => {
    if (err) {
      return next({ message: err.message, statusCode: 401 });
    }

    if (!user) {
      return next({ message: info.message, statusCode: 401 });
    }

    req.user = user;

    next();
  })(req, res, next);
};

passport.use(
  'signin',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const data = await user.findOne({ email });

        if (!data) {
          return done(null, false, { message: 'User is not found!' });
        }

        const validate = await bcrypt.compare(password, data.password);

        if (!validate) {
          return done(null, false, { message: 'Wrong password!' });
        }

        return done(null, data, { message: 'Login success!' });
      } catch (e) {
        return done(e, false, { message: "User can't be created" });
      }
    }
  )
);
