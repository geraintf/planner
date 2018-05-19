import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';

import Requests from '../requests';

const Strategy = GoogleStrategy.Strategy;

const configurePassport = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(({ id }, done) => done(null, id));

  passport.deserializeUser(async (id, done) => {
    const user = await Requests.user.findByID(id);

    done(null, user);
  });

  passport.use(
    new Strategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const userDetails = await Requests.user.createOrRetrieveUser({
        googleId: profile.id,
        firstName: profile.name.givenName,
        secondName: profile.name.familyName
      });

      done(null, userDetails);
    }));
};


export default configurePassport;
