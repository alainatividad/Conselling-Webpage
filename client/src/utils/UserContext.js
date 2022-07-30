import React, { createContext, useContext } from "react";
import { useUserReducer } from "./reducers";

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ value = [], ...props }) => {
  // sets initial user state
  const [state, dispatch] = useUserReducer({
    user: "",
    loggedIn: false,
    selectedConsultant: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
