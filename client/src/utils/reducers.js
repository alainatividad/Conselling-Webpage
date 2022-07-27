import { useReducer } from "react";
import { UPDATE_STATE } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      console.log("action.payload", action.user);
      return {
        ...state,
        user: action.user,
        loggedIn: action.status,
      };

    default:
      return state;
  }
};

export function useUserReducer(initialState) {
  return useReducer(reducer, initialState);
}
