import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Form,
  Transition,
  Button,
  TextArea,
  Message,
} from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/client";

import { useUserContext } from "../utils/UserContext";
import { GET_CLIENT } from "../utils/queries";
import { UPDATE_CLIENT } from "../utils/mutations";
import LoaderComp from "../components/LoaderComp";
import ErrorMessage from "../components/ErrorMessage";

const ClientDetail = () => {
  const style = {
    margin: "1em 0",
  };

  // get user state
  const { id } = useParams();
  const [state] = useUserContext();
  const [toggleForm, setToggleForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [clientForm, setClientForm] = useState({
    sessionNotes: "",
    additionalNotes: "",
  });

  if (!state.loggedIn) {
    return <ErrorMessage header="notLoggedIn" />;
  }
  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { clientId: id },
  });

  useEffect(() => {
    setClientForm({ soapNotes: soapNotes, additionalNotes: additionalNotes });
  }, [data]);

  const [updateClientDetails] = useMutation(UPDATE_CLIENT);

  if (loading) {
    return <LoaderComp />;
  }
  if (error) {
    return <ErrorMessage header="error" message={error.message} />;
  }

  const {
    fullName,
    scheduleDate,
    consultant,
    contactNumber,
    email,
    concern,
    soapNotes,
    additionalNotes,
  } = data.getClient;

  const handleToggleClick = () => {
    setToggleForm(!toggleForm);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setClientForm({ ...clientForm, [name]: value });
  };

  const handleButtonClick = async () => {
    try {
      await updateClientDetails({
        variables: { clientId: id, client: clientForm },
      });

      setSuccess(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Link to="/profile">← Back to Profile</Link>

      <h2>{fullName}</h2>

      <p>Scheduled Appointment: {scheduleDate}</p>

      <p>
        <strong>Concern: </strong>
        {concern}
      </p>
      <p>
        <strong>Consultant: </strong>
        {consultant}
      </p>
      <strong>Contact details: </strong>
      <ul>
        <li>{contactNumber}</li>
        <li>{email}</li>
      </ul>
      <Button content="Add Notes" onClick={handleToggleClick} />

      <Transition visible={toggleForm} animation="fade down" duration={500}>
        <Form style={style}>
          <Form.Field
            name="soapNotes"
            value={clientForm.soapNotes}
            control={TextArea}
            label="SOAP Notes"
            onChange={handleChange}
          />
          <Form.Field
            name="additional"
            value={clientForm.additionalNotes}
            control={TextArea}
            label="Additional Notes"
            onChange={handleChange}
          />
          <Button
            content="Save Notes"
            onClick={handleButtonClick}
            type="submit"
          />
        </Form>
      </Transition>
      {success && (
        <Message
          success
          header="Changes saved successfully"
          content="Success!!"
        />
      )}
    </Container>
  );
};

export default ClientDetail;
