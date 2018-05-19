import express from 'express';

import authRouter from './authentication';

const router = express();

router.use(authRouter);

export default router;
