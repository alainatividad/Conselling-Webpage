const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Consultant {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    description: String
    role: String
    services: String
    availabilities: [Availability]
    client: [Client]
  }

  type Availability {
    _id: ID
    consultantId: String
    # date: Date
    date: String
    sched: [Sched]!
  }

  type Client {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    contactNumber: String
    scheduleDate: String
    consultant: String
    concern: String
  }

  type Sched {
    _id: ID
    time: String
    booked: Boolean
  }

  type AuthClient {
    token: ID!
    user: Client
  }

  type AuthConsultant {
    token: ID!
    user: Consultant
  }

  input ClientInput {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    contactNumber: String
    # scheduleDate: Date
    scheduleDate: String
    consultant: String
    concern: String
  }

  input ConsultantInput {
    _id: ID
    firstName: String
    lastName: String
    email: String
    description: String
    role: String
    password: String
    services: String
  }

  type Query {
    meClient: Client
    meConsultant: Consultant
    getAvailability(consultantId: String!): [Availability]
    getAllAvailability: [Availability]
    getConsultants: [Consultant]
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
    updateConsultantDetails(consultant: ConsultantInput!): Consultant
    addBooking(consultantId: String!, scheduleDate: String!): Client
    updateAvailability(consultantId: String!, time: String!): Availability
    addClientToConsultant(consultantId: String!): Consultant
  }
`;

module.exports = typeDefs;
