const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const consultantSchema = new Schema(
  {
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
    description: {
      type: String,
    },
    role: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    services: {
      type: String,
    },
    availabilities: [
      {
        type: Schema.Types.ObjectId,
        ref: "Availability",
      },
    ],
    clients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Client",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

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

consultantSchema
  .virtual("fullName")
  .get(function () {
    return `${this.firstName} ${this.lastName}`;
  })
  .set(function (v) {
    const firstName = v.split(" ")[0];
    const lastName = v.split(" ")[1];
    this.set({ firstName, lastName });
  });

const Consultant = model("Consultant", consultantSchema);

module.exports = Consultant;
