const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.models.user || mongoose.model("user", userSchema);
