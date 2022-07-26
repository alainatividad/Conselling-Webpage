import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_CLIENT, LOGIN_CONSULTANT } from "../utils/mutations";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import Auth from "../utils/auth";

const Login = () => {
  const [clientFormData, setClientFormData] = useState({
    email: "",
    password: "",
  });
  const [consultantFormData, setConsultantFormData] = useState({
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginClient, { errorClient, dataClient }] = useMutation(LOGIN_CLIENT);
  const [loginConsultant, { errorCons, dataCons }] = useMutation(
    LOGIN_CONSULTANT
  );

  const handleClientInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(event.target);
    setClientFormData({ ...clientFormData, [name]: value });
  };

  const handleClientSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginClient({ variables: { ...clientFormData } });

      if (!data) {
        throw new Error("something went wrong!");
      }

      // const { token, client } = await response.json();
      // await console.log(response);
      Auth.login(data.loginClient.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setClientFormData({
      email: "",
      password: "",
    });
  };

  const handleConsultantInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(event.target);
    setConsultantFormData({ ...consultantFormData, [name]: value });
  };

  const handleConsultantSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginConsultant({
        variables: { ...clientFormData },
      });

      if (!data) {
        throw new Error("something went wrong!");
      }

      // const { token, client } = await response.json();
      // await console.log(response);
      Auth.login(data.loginConsultant.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setConsultantFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      {dataClient || dataCons ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
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
              <Form size="large" onSubmit={handleClientSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
                    name="email"
                    value={clientFormData.email}
                    onChange={handleClientInputChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    name="password"
                    placeholder="Password"
                    value={clientFormData.password}
                    onChange={handleClientInputChange}
                    type="password"
                  />

                  <Button color="teal" fluid size="large">
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href="/sign-up">Sign Up</a>
              </Message>
            </Grid.Column>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header
                as="h2"
                color="teal"
                textAlign="center"
                content="Consultant? Log-in to your account"
              />
              <Form size="large" onSubmit={handleConsultantSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
                    name="email"
                    value={consultantFormData.email}
                    onChange={handleConsultantInputChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={consultantFormData.password}
                    onChange={handleConsultantInputChange}
                  />

                  <Button color="teal" fluid size="large">
                    Login
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
      {errorClient && (
        <div className="my-3 p-3 bg-danger text-white">
          {errorClient.message}
        </div>
      )}
      {errorCons && (
        <div className="my-3 p-3 bg-danger text-white">{errorCons.message}</div>
      )}
    </>
  );
};

export default Login;
