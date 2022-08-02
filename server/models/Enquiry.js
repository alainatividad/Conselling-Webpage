const { Schema, model } = require("mongoose");

const enquirySchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    contact: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

enquirySchema
  .virtual("fullName")
  .get(function () {
    return `${this.firstName} ${this.lastName}`;
  })
  .set(function (v) {
    const firstName = v.split(" ")[0];
    const lastName = v.split(" ")[1];
    this.set({ firstName, lastName });
  });

const Enquiry = model("Enquiry", enquirySchema);
module.exports = Enquiry;
