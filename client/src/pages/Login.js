import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const LoginForm = () => (
  <Grid
    columns={2}
    container
    divided
    stackable
    textAlign="center"
    style={{ height: "100vh" }}
    verticalAlign="middle"
  >
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as="h2"
          color="teal"
          textAlign="center"
          content="Client? Log-in to your account"
        />
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as="h2"
          color="teal"
          textAlign="center"
          content="Consultant? Log-in to your account"
        />
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default LoginForm;
