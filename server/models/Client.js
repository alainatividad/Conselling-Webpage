const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const clientSchema = new Schema(
  {
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
    birthday: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    scheduleDate: {
      type: String,
    },
    prevSched: {
      type: String,
    },
    consultant: {
      type: String,
    },
    concern: {
      type: String,
    },
    address: {
      type: String,
    },
    familyHistory: {
      type: String,
    },
    relationshipStat: {
      type: String,
    },
    educationalBG: {
      type: String,
    },
    medHistory: {
      type: String,
    },
    significantEvent: {
      type: String,
    },
    trauma: {
      type: String,
    },
    additionalNotes: {
      type: String,
    },
    soapNotes: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// hash user password
clientSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
clientSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

clientSchema
  .virtual("fullName")
  .get(function () {
    return `${this.firstName} ${this.lastName}`;
  })
  .set(function (v) {
    const firstName = v.split(" ")[0];
    const lastName = v.split(" ")[1];
    this.set({ firstName, lastName });
  });

const Client = model("Client", clientSchema);
module.exports = Client;
