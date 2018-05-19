import express from 'express';
import passport from 'passport';

const authRouter = express();

authRouter.get(
  '/auth/login',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

authRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
);

authRouter.get(
  '/logout',
  (req, res) => {
    req.logout();
    res.redirect('/');
  }
);

export default authRouter;
