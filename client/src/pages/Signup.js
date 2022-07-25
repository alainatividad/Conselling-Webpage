import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const LoginForm = () => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center" content="Sign Up" />
        <Form>
          <Segment stacked>
            <Form.Group widths="equal">
              <Form.Input
                required={true}
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="First name"
                placeholder="First name"
              />
              <Form.Input
                required={true}
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Last name"
                placeholder="Last name"
              />
            </Form.Group>
            <Form.Input
              required={true}
              fluid
              label="E-mail"
              placeholder="E-mail address"
              error={{
                content: "Please enter a valid email address",
                pointing: "below",
              }}
            />
            <Form.Input
              required={true}
              fluid
              label="Password"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large" content="Sign up" />
          </Segment>
        </Form>
        <Message>
          Already have an account? <a href="/login">Login</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default LoginForm;