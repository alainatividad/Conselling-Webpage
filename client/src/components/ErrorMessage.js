import React from "react";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";

const ErrorMessage = (prop) => {
  switch (prop.header) {
    case "notLoggedIn":
      return (
        <Message size="big">
          <Message.Header>
            Sorry, you are currently not logged in
          </Message.Header>
          <Message.Content>
            Please <Link to={"/login"}>login</Link> to view this page
          </Message.Content>
        </Message>
      );

    case "error":
      return (
        <Message size="big">
          <Message.Header>Error</Message.Header>
          <Message.Content>{prop.message}</Message.Content>
        </Message>
      );

    default:
      return (
        <Message size="big">
          <Message.Header>Home</Message.Header>

          <Message.Content>
            <Link to={"/"}>Home</Link>
          </Message.Content>
        </Message>
      );
  }
};

export default ErrorMessage;
