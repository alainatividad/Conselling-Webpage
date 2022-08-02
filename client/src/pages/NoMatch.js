import React from "react";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

const NoMatch = () => {
  return (
    <div>
      <Header size="huge" content="404 Page Not Found" />
      <p>
        Please <Link to="/">back to the homepage.</Link>
      </p>
    </div>
  );
};
export default NoMatch;
