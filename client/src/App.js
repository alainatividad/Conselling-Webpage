import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import DateTimePicker from "react-datetime-picker";
import "fomantic-ui-css/semantic.css";
import { Container } from "semantic-ui-react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "/graphql",
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
