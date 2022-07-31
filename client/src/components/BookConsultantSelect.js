import React, { useState } from "react";
import { Container, Segment, Dropdown } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { GET_CONSULTANTS } from "../utils/queries";
import { useUserContext } from "../utils/UserContext";
import { UPDATE_CONSULTANT } from "../utils/actions";
import LoadCalendar from "./LoadCalendar";
import LoaderComp from "./LoaderComp";

const BookConsultantSelect = () => {
  // get user state
  const [state, dispatch] = useUserContext();
  const [consultant, setConsultant] = useState("");
  const { loading, error, data } = useQuery(GET_CONSULTANTS);
  const [desc, setDesc] = useState("");
  const [role, setRole] = useState("");
  const [services, setServices] = useState("");
  const [name, setName] = useState("");

  if (loading) {
    return <LoaderComp />;
  }
  if (error) {
    return (
      <>
        <h2>Error! {error.message}</h2>
      </>
    );
  }

  // from https://lauren-gifford.medium.com/controlled-select-dropdown-using-semantic-ui-for-react-a934af3ca326
  // map data to value, key, text
  const consultants = data.getConsultants.map((consultant) => ({
    value: consultant._id,
    text: `${consultant.fullName}`,
    key: consultant._id,
    desc: `${consultant.description}`,
    role: `${consultant.role}`,
    services: `${consultant.services}`,
  }));

  function handleDropdown(e, data) {
    setConsultant(data.value);
    dispatch({ type: UPDATE_CONSULTANT, payload: data.value });
    setDesc(data.options.find((el) => el.value === data.value).desc);
    setName(data.options.find((el) => el.value === data.value).text);
    setRole(data.options.find((el) => el.value === data.value).role);
    setServices(data.options.find((el) => el.value === data.value).services);
  }

  return (
    <>
      <h3>Book an appointment</h3>
      <Container stackable>
        <Dropdown
          selectOnNavigation={false}
          onChange={handleDropdown}
          value={consultant}
          options={consultants}
          placeholder="Choose a consultant"
          selection
        />
        {desc ? (
          <Segment secondary>
            <p>{name}</p>
            {role}

            <p>{desc}</p>

            <p>{services}</p>
          </Segment>
        ) : null}
        {consultant ? <LoadCalendar consultant={consultant} /> : null}
      </Container>
    </>
  );
};

export default BookConsultantSelect;
