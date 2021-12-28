const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PersonSchema = schema({
  name: {
    type: String,
    required: true,
  },
  phone: Number,
  favoriteFoods: [String],
});
module.exports = Person = mongoose.model("PersonPrototype", PersonSchema);
