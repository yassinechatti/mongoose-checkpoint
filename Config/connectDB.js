const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://mongo:mongoyassine@cluster0.sbn4q.mongodb.net/mongo?retryWrites=true&w=majority"
    );
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
