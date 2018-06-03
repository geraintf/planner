import express from 'express';

import authRouter from './authentication';
import graphqlRouter from './graphql';

const router = express();

router.use(authRouter);
router.use(graphqlRouter);

export default router;
