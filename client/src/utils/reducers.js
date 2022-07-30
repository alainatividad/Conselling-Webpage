import { useReducer } from "react";
import { UPDATE_STATE, UPDATE_CONSULTANT } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        user: action.user,
        loggedIn: action.status,
      };

    case UPDATE_CONSULTANT:
      return {
        ...state,
        selectedConsultant: action.payload,
      };

    default:
      return state;
  }
};

export function useUserReducer(initialState) {
  return useReducer(reducer, initialState);
}
