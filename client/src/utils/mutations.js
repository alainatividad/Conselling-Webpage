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

export const LOGIN_CONSULTANT = gql`
  mutation LoginConsultant($email: String!, $password: String!) {
    loginConsultant(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        services
        availability {
          _id
          consultantId
          date
          booked
        }
        client {
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
  }
`;

// export const LOGIN_CLIENT = gql``;
// export const LOGIN_CLIENT = gql``;
// export const LOGIN_CLIENT = gql``;
// export const LOGIN_CLIENT = gql``;
// export const LOGIN_CLIENT = gql``;
// export const LOGIN_CLIENT = gql``;
