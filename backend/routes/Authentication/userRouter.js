const express = require('express');
const registerUser = require('../../controllers/Authentication/Register');
const loginUser = require('../../controllers/Authentication/Login');
const logoutUser = require('../../controllers/Authentication/LogOut');

const userRouter = express.Router();

userRouter.post('/signup' , registerUser);

userRouter.post('/login' , loginUser);

userRouter.post('/logout' , logoutUser);



module.exports = userRouter;
