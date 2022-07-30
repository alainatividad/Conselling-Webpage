const { Schema, model } = require("mongoose");

const availabilitySchema = new Schema({
  consultantId: {
    type: String,
  },
  date: {
    // type: Date,
    type: String,
    required: true,
  },
  sched: [
    {
      time: String,
      booked: {
        type: Boolean,
        default: true,
      },
    },
  ],
});

availabilitySchema.index({ consultantId: 1, date: 1 });
const Availability = model("Availability", availabilitySchema);
module.exports = Availability;
