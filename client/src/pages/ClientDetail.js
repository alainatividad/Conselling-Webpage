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

import Auth from "../utils/auth";
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
  const [toggleForm, setToggleForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [clientForm, setClientForm] = useState({
    sessionNotes: "",
    additionalNotes: "",
  });

  if (!Auth.loggedIn()) {
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
    concern,
    email,
    birthday,
    address,
    familyHistory,
    relationshipStat,
    educationalBG,
    medHistory,
    significantEvent,
    trauma,
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

      <p>
        <strong>Scheduled Appointment: </strong>
        {new Date(scheduleDate).toLocaleString("en-GB", {
          timezone: "Australia/Sydney",
        })}
      </p>

      <p>
        <strong>Concern: </strong>
        {concern}
      </p>
      <p>
        <strong>Consultant: </strong>
        {consultant}
      </p>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            placeholder="Email Address"
            name="email"
            label="Email Address"
            value={email}
            readOnly
          />
          <Form.Input
            fluid
            placeholder="Contact Number"
            name="contactNumber"
            label="Contact Number"
            value={contactNumber}
            readOnly
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            placeholder="DD/MM/YYYY"
            name="birthday"
            label="Date of Birth"
            value={birthday}
            readOnly
          />
          <Form.Input
            name="relationshipStat"
            value={relationshipStat}
            label="Relationship Status"
            readOnly
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Primary Concern"
            name="concern"
            value={concern}
            readOnly
          />
          <Form.Input
            fluid
            label="Trauma"
            name="trauma"
            value={trauma}
            readOnly
          />
        </Form.Group>
        <Form.Input
          fluid
          label="Address"
          name="address"
          value={address}
          readOnly
        />
        <Form.Input
          name="educationalBG"
          value={educationalBG}
          control={TextArea}
          label="Educational Background"
          readOnly
        />
        <Form.Field
          name="familyHistory"
          value={familyHistory}
          control={TextArea}
          label="Family History"
          readOnly
        />
        <Form.Field
          name="medHistory"
          value={medHistory}
          control={TextArea}
          label="Medical History"
          readOnly
        />
        <Form.Field
          name="significantEvent"
          value={significantEvent}
          control={TextArea}
          label="Significant Event"
          readOnly
        />
      </Form>

      <div style={style}>
        <Button content="Add Notes" onClick={handleToggleClick} />
      </div>

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
