import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, TextArea, Message } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/client";
// import { useUserContext } from "../utils/UserContext";
import { GET_ME_CLIENT } from "../utils/queries";
import { UPDATE_CLIENT, DELETE_BOOKING } from "../utils/mutations";

import LoaderComp from "../components/LoaderComp";
import ErrorMessage from "../components/ErrorMessage";
import { validateBday } from "../utils/validate";
import Auth from "../utils/auth";

const ProfileDetail = () => {
  const navigate = useNavigate();
  // get user state
  const { id } = useParams();
  // const [state] = useUserContext();
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [clientForm, setClientForm] = useState({
    contactNumber: "",
    concern: "",
    birthday: "",
    address: "",
    familyHistory: "",
    relationshipStat: "",
    educationalBG: "",
    medHistory: "",
    significantEvent: "",
    trauma: "",
    scheduleDate: "",
    consultant: "",
  });

  if (!Auth.loggedIn()) {
    return <ErrorMessage header="notLoggedIn" />;
  }
  const [updateClientDetails] = useMutation(UPDATE_CLIENT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setClientForm({ ...clientForm, [name]: value });
  };

  const handleButtonClick = async () => {
    if (!validateBday(clientForm.birthday)) {
      setErrorMsg("Invalid birthday entered");
      return;
    }
    try {
      await updateClientDetails({
        variables: { clientId: id, client: clientForm },
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
    }
  };

  const [deleteBooking] = useMutation(DELETE_BOOKING);
  const handleCancelButton = async () => {
    try {
      const { booking } = await deleteBooking({
        variables: {
          // consultantId: state.selectedConsultant,
          consultant: clientForm.consultant,
          scheduleDate: clientForm.scheduleDate,
        },
      });
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  const { loading, error, data } = useQuery(GET_ME_CLIENT, {
    variables: { clientId: id },
  });

  if (loading) {
    return <LoaderComp />;
  }
  if (error) {
    return <ErrorMessage header="error" message={error.message} />;
  }

  const {
    fullName,
    contactNumber,
    birthday,
    scheduleDate,
    consultant,
    concern,
    address,
    familyHistory,
    relationshipStat,
    educationalBG,
    medHistory,
    significantEvent,
    trauma,
  } = data.meClient;

  useEffect(() => {
    setClientForm({
      contactNumber: contactNumber,
      concern: concern,
      birthday: birthday,
      address: address,
      familyHistory: familyHistory,
      relationshipStat: relationshipStat,
      educationalBG: educationalBG,
      medHistory: medHistory,
      significantEvent: significantEvent,
      trauma: trauma,

      scheduleDate: scheduleDate,
      consultant: consultant,
    });
  }, [data.meClient]);

  if (!scheduleDate) {
    navigate("/profile");
  }

  return (
    <Container>
      <Link to="/profile">← Back to Profile</Link>

      <h2>{fullName}</h2>

      <p>
        <strong>Scheduled Appointment:</strong>{" "}
        {new Date(scheduleDate).toLocaleString("en-GB", {
          timezone: "Australia/Sydney",
        })}
      </p>
      <p>
        <strong>Current Consultant:</strong> {consultant}
      </p>

      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            placeholder="Contact Number"
            name="contactNumber"
            label="Contact Number"
            value={clientForm.contactNumber}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            placeholder="DD/MM/YYYY"
            name="birthday"
            label="Date of Birth"
            value={clientForm.birthday}
            onChange={handleChange}
          />
          <Form.Input
            name="relationshipStat"
            value={clientForm.relationshipStat}
            label="Relationship Status"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Primary Concern"
            name="concern"
            value={clientForm.concern}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Trauma"
            name="trauma"
            value={clientForm.trauma}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Input
          fluid
          label="Address"
          name="address"
          value={clientForm.address}
          onChange={handleChange}
        />
        <Form.Input
          name="educationalBG"
          value={clientForm.educationalBG}
          control={TextArea}
          label="Educational Background"
          onChange={handleChange}
        />
        <Form.Field
          name="familyHistory"
          value={clientForm.familyHistory}
          control={TextArea}
          label="Family History"
          onChange={handleChange}
        />
        <Form.Field
          name="medHistory"
          value={clientForm.medHistory}
          control={TextArea}
          label="Medical History"
          onChange={handleChange}
        />
        <Form.Field
          name="significantEvent"
          value={clientForm.significantEvent}
          control={TextArea}
          label="Significant Event"
          onChange={handleChange}
        />
        <Button
          content="Save Details"
          onClick={handleButtonClick}
          type="submit"
          color="green"
        />
        <Button onClick={handleCancelButton}>Cancel booking</Button>
      </Form>
      {success && <Message content="Success!!" />}
      {errorMsg && <ErrorMessage header="error" message={errorMsg} />}
    </Container>
  );
};

export default ProfileDetail;
