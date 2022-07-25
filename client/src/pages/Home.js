import React from "react";
import { Container, Header, Button, Icon } from "semantic-ui-react";

const Home = () => {
  const style = {
    margin: {
      marginTop: "3em",
    },
  };
  return (
    <div>
      <Container text style={style.margin}>
        <Header as="h1" content="Imagine-a-Company" />
        <Header as="h2" content="Do whatever you want when you want to." />
        <Button primary size="huge">
          Get Started
          <Icon name="right arrow" />
        </Button>
      </Container>
    </div>
  );
};

export default Home;
