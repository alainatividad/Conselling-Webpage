const mongoose = require("mongoose");
require("dotenv").config();

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/counsellingApp",
mongoose.connect("mongodb://localhost/counsellingApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
