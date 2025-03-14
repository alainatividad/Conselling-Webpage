import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { storeInLocalStorage } from "../utils/helper";
import { LOGIN_CLIENT, LOGIN_CONSULTANT } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const Login = () => {
  const navigate = useNavigate();
  const [clientFormData, setClientFormData] = useState({
    email: "",
    password: "",
  });
  const [consultantFormData, setConsultantFormData] = useState({
    email: "",
    password: "",
  });

  const [showErrMsg, setShowErrMsg] = useState({ client: true, message: "" });
  const [loginClient] = useMutation(LOGIN_CLIENT);
  const [loginConsultant] = useMutation(LOGIN_CONSULTANT);

  const handleClientInputChange = (event) => {
    const { name, value } = event.target;
    setClientFormData({ ...clientFormData, [name]: value });
  };

  const handleClientSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginClient({ variables: { ...clientFormData } });
      //save the type of user in localstorage
      storeInLocalStorage({ name: "user", value: "client" });
      Auth.login(data.loginClient.token);
      navigate("/profile");
    } catch (err) {
      console.error(err);
      setShowErrMsg({ client: true, message: err });
    }
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
        variables: { ...consultantFormData },
      });

      storeInLocalStorage({ name: "user", value: "consultant" });
      Auth.login(data.loginConsultant.token);
      navigate("/profile");
    } catch (err) {
      console.error(err);
      setShowErrMsg({ client: false, message: err });
    }
  };

  return (
    <>
      <Grid
        columns={2}
        container
        divided
        stackable
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Row>
          {/*  style={{ maxWidth: 450 }} */}
          <Grid.Column>
            <Header as="h2" textAlign="center" content="Client Login" />
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

                <Button fluid size="large">
                  Login
                </Button>
              </Segment>
              {showErrMsg.client && showErrMsg.message ? (
                <Message visible error>
                  <Message.Header>Error logging in</Message.Header>
                  <Message.Content>
                    The provided credentials are incorrect
                  </Message.Content>
                </Message>
              ) : null}
            </Form>
            <Message>
              New to us? <a href="/sign-up">Sign Up</a>
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2" textAlign="center" content="Consultant Login" />
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

                <Button fluid size="large">
                  Login
                </Button>
              </Segment>
              {!showErrMsg.client && showErrMsg.message ? (
                <Message visible error>
                  <Message.Header>Error logging in</Message.Header>
                  <Message.Content>
                    The provided credentials are incorrect
                  </Message.Content>
                </Message>
              ) : null}
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* )} */}
    </>
  );
};

export default Login;
