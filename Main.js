const express = require("express");
const app = express();

const connectDB = require("./Config/connectDB");
connectDB();
const Person = require("./Models/PersonPrototype");

const newPerson = new Person({
  name: "Yassine",
  phone: 216555555,
  favoriteFoods: ["Ma9rouna", "Kafteji"],
});
newPerson.save((err, data) => {
  try {
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

Person.create(
  [
    {
      name: "Mohamed",
      phone: 214124124,
      favoriteFoods: ["Ojja", "ma9loub"],
    },
    {
      name: "Ali",
      phone: 22222222,
      favoriteFoods: ["Ojja", "ma9loub", "Lablebi"],
    },
    {
      name: "Sami",
      phone: 23313313,
      favoriteFoods: ["Riz", "Pizza"],
    },
  ],
  (err, data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

Person.find((err, data) => {
  try {
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

const port = 5000;
app.listen(port, (error) => {
  error ? console.log(error) : console.log("Server is running");
});
