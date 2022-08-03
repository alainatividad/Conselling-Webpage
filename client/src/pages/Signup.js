import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_CLIENT } from "../utils/mutations";
import { storeInLocalStorage } from "../utils/helper";
import Auth from "../utils/auth";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const SignupForm = () => {
  const navigate = useNavigate();
  storeInLocalStorage({ name: "current_page", value: "signup" });
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { data, error }] = useMutation(CREATE_CLIENT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({ variables: { ...userFormData } });

      if (!data) {
        throw new Error("something went wrong!");
      }

      // if signup successful, update userState and statusState
      storeInLocalStorage({ name: "user", value: "client" });
      Auth.login(data.createClient.token);
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" size="large" textAlign="center" content="Sign Up" />
            <Form onSubmit={handleFormSubmit}>
              <Segment stacked>
                <Form.Group widths="equal">
                  <Form.Input
                    required={true}
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="First name"
                    placeholder="First name"
                    value={userFormData.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                  />
                  <Form.Input
                    required={true}
                    fluid
                    id="form-subcomponent-shorthand-input-last-name"
                    label="Last name"
                    placeholder="Last name"
                    name="lastName"
                    value={userFormData.lastName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                {error ? (
                  <Form.Input
                    required={true}
                    fluid
                    label="Email"
                    placeholder="Email address"
                    name="email"
                    value={userFormData.email}
                    onChange={handleInputChange}
                    error={{
                      content: "Please enter a valid email address",
                      pointing: "below",
                    }}
                  />
                ) : (
                  <Form.Input
                    required={true}
                    fluid
                    label="E-mail"
                    name="email"
                    placeholder="E-mail address"
                    value={userFormData.email}
                    onChange={handleInputChange}
                  />
                )}

                <Form.Input
                  required={true}
                  fluid
                  label="Password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={userFormData.password}
                  onChange={handleInputChange}
                />

                <Button fluid size="large" content="Sign up" />
              </Segment>
            </Form>
            <Message>
              Already have an account? <a href="/login">Login</a>
            </Message>
          </Grid.Column>
        </Grid>
      )}
    </>
  );
};
export default SignupForm;
