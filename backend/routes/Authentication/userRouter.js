const express = require('express');
const registerUser = require('../../controllers/Authentication/Register');
const loginUser = require('../../controllers/Authentication/Login');
const logoutUser = require('../../controllers/Authentication/LogOut');
const getUser = require('../../controllers/Authentication/getUser');
const isAuthenticated = require('../../middleware/isAuthenticated');

const userRouter = express.Router();

userRouter.post('/signup', registerUser);

userRouter.post('/login', loginUser);

userRouter.post('/logout', logoutUser);

userRouter.get('/getUser', isAuthenticated, getUser);

module.exports = userRouter;
