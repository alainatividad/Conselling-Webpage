const { Schema, model } = require("mongoose");

const availabilitySchema = new Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  consultantId: {
    type: String,
    required: true,
    unique: true,
  },
  booked: {
    type: Boolean,
    default: false,
  },
});

const Availability = model("Availability", availabilitySchema);
module.exports = Availability;
