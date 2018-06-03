import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';

import { UserController } from '../controllers';

const Strategy = GoogleStrategy.Strategy;

const configurePassport = (app) => {
  passport.serializeUser(({ id }, done) => done(null, id));

  passport.deserializeUser(async (id, done) => {
    const user = await UserController.findByID(id);
    done(null, user);
  });

  passport.use(
    new Strategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const userDetails = await UserController.createOrRetrieve(
        profile.id,
        profile.name.givenName,
        profile.name.familyName
      );

      done(null, userDetails);
    }
    ));

  app.use(passport.initialize());
  app.use(passport.session());
};

export default configurePassport;
