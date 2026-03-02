import express from 'express'
import { getcurrentUser } from '../controllers/user.controller.js';
import isAuth from '../middlewares/isAuth.js';

const userRouter = express.Router();

userRouter.get('/current-user',isAuth,getcurrentUser)

export default userRouter;