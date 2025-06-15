const mongoose = require('mongoose');

const mongoDB = process.env.MongoDB_URL;

const connectDb = async () => {
  try {
    await mongoose
      .connect(mongoDB)
      .then(() => console.log('connected to mongoDB'))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log('Failed while connect to mongoDB', error);
  }
};

module.exports = connectDb;
