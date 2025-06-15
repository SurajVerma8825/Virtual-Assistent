require('dotenv').config();
const express = require('express');
const connectDb = require('./config/DB');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/Authentication/userRouter');

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDb();

app.use('/api/v1/users', userRouter);

app.listen(port, () => {
  console.log(`Server is listen at ${port}`);
});
