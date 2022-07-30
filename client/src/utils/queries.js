import { gql } from "@apollo/client";

export const GET_ME_CLIENT = gql`
  query meClient {
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
  query meConsultant {
    meConsultant {
      _id
      firstName
      lastName
      email
      description
      role
      services
      availabilities {
        _id
        consultantId
        date
        sched {
          _id
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

export const GET_AVAILABILITY = gql`
  query getAvailability($id: String!) {
    getAvailability(consultantId: $id) {
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

export const GET_ALL_AVAILABILITY = gql`
  query getAvailability {
    getAvailability {
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

export const GET_CONSULTANTS = gql`
  query getConsultants {
    getConsultants {
      _id
      firstName
      lastName
      email
      description
      role
      services
      availabilities {
        _id
        consultantId
        date
        sched {
          _id
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
