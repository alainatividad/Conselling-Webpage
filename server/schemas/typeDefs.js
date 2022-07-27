const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Availability {
    _id: ID
    consultantId: String
    date: Date
    booked: Boolean
  }

  type Client {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    contactNumber: String
    scheduleDate: Date
    consultant: String
    concern: String
  }

  type Consultant {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    services: String
    availability: [Availability]
    client: [Client]
  }

  type AuthClient {
    token: ID!
    user: Client
  }

  type AuthConsultant {
    token: ID!
    user: Consultant
  }

  type ClientInput {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    contactNumber: String
    scheduleDate: Date
    consultant: String
    concern: String
  }

  type ConsultantInput {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    services: String
    availability: String
    client: [Client]
  }

  type Query {
    meClient: Client
    meConsultant: Consultant
    availability: [Availability]
  }

  type Mutation {
    loginClient(email: String!, password: String!): AuthClient
    loginConsultant(email: String!, password: String!): AuthConsultant
    createClient(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): AuthClient
    createConsultant(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): AuthConsultant
    # updateConsultantDetails(consultant: ConsultantInput!): Consultant
    addBooking(_id: ID!): Client
    addAvailability(date: Date!): Availability
  }
`;

module.exports = typeDefs;
