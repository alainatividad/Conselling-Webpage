import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "fomantic-ui-css/semantic.css";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";

import { UserProvider } from "./utils/UserContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import ClientDetail from "./pages/ClientDetail";
import ProfileDetail from "./pages/ProfileDetail";

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
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        {/* Wrap page elements in Router component to keep track of location state */}
        <Router>
          <Navbar />
          <Container style={{ padding: "2em 0em" }}>
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile/:id" element={<ProfileDetail />} />
              <Route path="/profile/client/:id" element={<ClientDetail />} />
              <Route
                path="*"
                element={<h1 className="display-2">Wrong page!</h1>}
              />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
