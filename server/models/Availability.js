const { Schema, model } = require("mongoose");

const availabilitySchema = new Schema({
  date: {
    type: Date,
    required: true,
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

module.exports = availabilitySchema;
