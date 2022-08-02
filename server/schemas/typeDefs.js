const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Consultant {
    _id: ID
    firstName: String
    lastName: String
    fullName: String
    email: String
    password: String
    description: String
    role: String
    services: String
    image: String
    availabilities: [Availability]
    clients: [Client]
  }

  type Availability {
    _id: ID
    consultantId: String
    date: String
    sched: [Sched]!
  }

  type Client {
    _id: ID
    email: String
    password: String
    firstName: String
    fullName: String
    lastName: String
    contactNumber: String
    birthday: String
    scheduleDate: String
    consultant: String
    concern: String
    prevSched: String
    address: String
    familyHistory: String
    relationshipStat: String
    educationalBG: String
    medHistory: String
    significantEvent: String
    trauma: String
    additionalNotes: String
    soapNotes: String
  }

  type Sched {
    _id: ID
    time: String
    booked: Boolean
  }

  type Enquiry {
    _id: ID
    email: String
    message: String
    firstName: String
    lastName: String
    fullName: String
    contact: String
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
    scheduleDate: String
    consultant: String
    birthday: String
    concern: String
    prevSched: String
    address: String
    familyHistory: String
    relationshipStat: String
    educationalBG: String
    medHistory: String
    significantEvent: String
    trauma: String
    additionalNotes: String
    soapNotes: String
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
    getClient(clientId: String!): Client
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
    addBooking(
      consultantId: String!
      scheduleDate: String!
      concern: String!
    ): Client
    updateConsultantDetails(consultant: ConsultantInput!): Consultant
    updateClientDetails(clientId: String!, client: ClientInput!): Client
    createEnquiry(
      email: String!
      message: String!
      contact: String!
      firstName: String!
      lastName: String!
    ): Enquiry
    # updateAvailability(consultantId: String!, time: String!): Availability
    # addClientToConsultant(consultantId: String!): Consultant
  }
`;

module.exports = typeDefs;
