import { gql } from "@apollo/client";

export const CREATE_CLIENT = gql`
  mutation createClient(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createClient(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      user {
        _id
        email
        firstName
        lastName
        contactNumber
        scheduleDate
        consultant
        concern
      }
    }
  }
`;

export const LOGIN_CLIENT = gql`
  mutation LoginClient($email: String!, $password: String!) {
    loginClient(email: $email, password: $password) {
      token
      user {
        _id
        email
        fullName
      }
    }
  }
`;

export const LOGIN_CONSULTANT = gql`
  mutation LoginConsultant($email: String!, $password: String!) {
    loginConsultant(email: $email, password: $password) {
      token
      user {
        _id
        fullName
        email
      }
    }
  }
`;

export const ADD_BOOKING = gql`
  mutation AddBooking(
    $consultantId: String!
    $scheduleDate: String!
    $concern: String!
  ) {
    addBooking(
      consultantId: $consultantId
      scheduleDate: $scheduleDate
      concern: $concern
    ) {
      _id
      email
      password
      fullName
      contactNumber
      scheduleDate
      consultant
      concern
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation Mutation($clientId: String!, $client: ClientInput!) {
    updateClientDetails(clientId: $clientId, client: $client) {
      _id
      email
      password
      firstName
      fullName
      lastName
      contactNumber
      birthday
      scheduleDate
      consultant
      concern
      prevSched
      address
      familyHistory
      relationshipStat
      educationalBG
      medHistory
      significantEvent
      trauma
      additionalNotes
      soapNotes
    }
  }
`;
// export const LOGIN_CLIENT = gql``;
// export const LOGIN_CLIENT = gql``;
