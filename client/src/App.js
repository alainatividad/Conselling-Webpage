import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import DateTimePicker from "react-datetime-picker";
import "fomantic-ui-css/semantic.css";
import { Container } from "semantic-ui-react";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [value, onChange] = useState(new Date());

  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <Navbar />
        <Container>
          <div className="container">
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route path="/" element={<Home />} />
              {/* Define a route that will take in variable data */}
              {/* <Route 
                path="/profiles/:profileId" 
                element={<Profile />} 
              /> */}
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              {/* <Route
                path="*"
                element={<h1 className="display-2">Wrong page!</h1>}
              /> */}
            </Routes>
          </div>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
