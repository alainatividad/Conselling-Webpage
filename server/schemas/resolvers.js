const { AuthenticationError } = require("apollo-server-express");
const { Client, Consultant } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // query for getting own data
    meClient: async (parent, args, context) => {
      if (context.user) {
        const client = await Client.findOne({ _id: context.user._id });

        if (!client) {
          throw new AuthenticationError("No user with this email found.");
        }

        return client;
      }
      throw new AuthenticationError("You need to be logged in");
    },
    meConsultant: async (parent, args, context) => {
      if (context.user) {
        const consultant = await Consultant.findOne({ _id: context.user._id });

        if (!consultant) {
          throw new AuthenticationError("No user with this email found.");
        }

        return consultant;
      }
      throw new AuthenticationError("You need to be logged in");
    },
  },

  Mutation: {
    loginClient: async (parent, { email, password }) => {
      const user = await Client.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found.");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Invalid credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    loginClient: async (parent, { email, password }) => {
      const user = await Consultant.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found.");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Invalid credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    createClient: async (parent, { email, password, firstName, lastName }) => {
      const user = await Client.create({
        email,
        password,
        firstName,
        lastName,
      });
      if (!user) {
        throw new AuthenticationError("There is an issue logging in.");
      }
      const token = signToken(user);
      return { token, user };
    },
    // updateConsultantDetails: async (parent, { consultant }, context) => {
    //   if (context.user) {
    //     return Consultant.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { client: consultant } },
    //       { new: true, runValidators: true }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in");
    // },
    addBooking: async (parent, { scheduledDate }, context) => {
      if (context.user) {
        return Client.finOneAndReplace(
          { _id: context.user._id },
          { scheduleDate: scheduledDate },
          { new: true, runValidators: true }
        );
      }
    },
    // updateClientDetails: async (parent, { client }, context) => {
    //   if (context.user) {
    //     return Client.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { savedBooks: { bookId: bookId } } },
    //       { new: true, runValidators: true }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in");
    // },
  },
};

module.exports = resolvers;
