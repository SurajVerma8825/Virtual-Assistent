require('dotenv').config();
const express = require('express');
const connectDb = require('./config/DB');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRouter = require('./routes/Authentication/userRouter');

const app = express();

const port = process.env.PORT;

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://job-portal-yljy.vercel.app'],

    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDb();

//!Routers
app.use('/api/v1/users', userRouter);

app.listen(port, () => {
  console.log(`Server is listen at ${port}`);
});
