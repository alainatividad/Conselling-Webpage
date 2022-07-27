const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schemas
const clientSchema = require("./Client").schema;
const availabilitySchema = require("./Availability").schema;
const consultantSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  services: {
    type: String,
  },
  availability: [availabilitySchema],
  client: [clientSchema],
});

// hash user password
consultantSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
consultantSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Consultant = model("Consultant", consultantSchema);

module.exports = Consultant;
