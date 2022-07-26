import { gql } from "@apollo/client";

export const GET_ME_CLIENT = gql`
  query MeClient {
    meClient {
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
`;

export const GET_ME_CONSULTANT = gql`
  query MeConsultant {
    meConsultant {
      _id
      firstName
      lastName
      email
      password
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
`;
