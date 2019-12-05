var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var Trader = require("../model/trader");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    function (accessToken, refreshToken, profile, cb) {
      // a user has logged in via OAuth!
      Trader.findOne({ 'googleId': profile.id }, function (err, trader) {
        if (err) return cb(err);
        if (trader) {
          if (!trader.avatar) {
            trader.avatar = profile.photos[0].value;
            trader.save(function (err) {
              return cb(null, trader);
            });
          } else {
            return cb(null, trader);
          }
        } else {
          // we have a new trader via OAuth!
          var newTrader = new Trader({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
          });
          newTrader.save(function (err) {
            if (err) return cb(err);
            return cb(null, newTrader);
          });
        }
      });
    }
  )
);

passport.serializeUser(function (trader, done) {
  done(null, trader.id);
});

passport.deserializeUser(function (id, done) {
  Trader.findById(id, function (err, trader) {
    done(err, trader);
  });
});
