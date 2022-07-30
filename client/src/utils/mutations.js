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
        description
        services
        role
        availability {
          _id
          consultantId
          date
          sched {
            time
            booked
          }
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

export const ADD_BOOKING = gql`
  mutation AddBooking($consultantId: String!, $scheduleDate: String!) {
    addBooking(consultantId: $consultantId, scheduleDate: $scheduleDate) {
      _id
      email
      password
      firstName
      lastName
      contactNumber
      scheduleDate
      consultant
      concern
    }
  }
`;
export const UPDATE_AVAILABILITY = gql`
  mutation UpdateAvailability($consultantId: String!, $time: String!) {
    updateAvailability(consultantId: $consultantId, time: $time) {
      _id
      consultantId
      date
      sched {
        time
        booked
      }
    }
  }
`;
export const UPDATE_BOOK_CONSULTANT = gql`
  mutation UpdateAvailability($consultantId: String!) {
    addClientToConsultant(consultantId: $consultantId) {
      _id
      firstName
      lastName
      email
      description
      role
      services
      availability {
        _id
        consultantId
        date
        sched {
          time
          booked
        }
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
`;
// export const LOGIN_CLIENT = gql``;
// export const LOGIN_CLIENT = gql``;
// export const LOGIN_CLIENT = gql``;
