import React, { useRef } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "fomantic-ui-css/semantic.css";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Ref, Sticky, Menu } from "semantic-ui-react";

import { UserProvider } from "./utils/UserContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ClientDetail from "./pages/ClientDetail";
import ProfileDetail from "./pages/ProfileDetail";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import NoMatch from "./pages/NoMatch";

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
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const contextRef = useRef(null);
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        {/* Wrap page elements in Router component to keep track of location state */}
        <Router>
          <Navbar />
          <Ref innerRef={contextRef}>
            <Container style={{ padding: "2em 0em" }}>
              <Sticky context={contextRef} bottomOffset={0} offset={0} pushing>
                <Menu icon vertical floated="right">
                  <Menu.Item
                    name="Top"
                    icon="arrow up"
                    onClick={() => handleClick()}
                  />
                </Menu>
              </Sticky>
              {/* Wrap Route elements in a Routes component */}
              <Routes>
                {/* Define routes using the Route component to render different page components at different paths */}
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<ProfileDetail />} />
                <Route path="/profile/client/:id" element={<ClientDetail />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Container>
          </Ref>
          <Footer />
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
