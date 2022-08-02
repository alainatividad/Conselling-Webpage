import React, { useState } from "react";
import { Container, Segment, Dropdown, Image, Card } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { storeInLocalStorage } from "../utils/helper";
import { GET_CONSULTANTS } from "../utils/queries";
import LoadCalendar from "./LoadCalendar";
import LoaderComp from "./LoaderComp";

const BookConsultantSelect = () => {
  // get user state
  // const [state, dispatch] = useUserContext();
  const [consultant, setConsultant] = useState("");
  const { loading, error, data } = useQuery(GET_CONSULTANTS);
  const [consultantDetails, setConsultantDetails] = useState({
    desc: "",
    role: "",
    services: "",
    name: "",
    image: "",
  });

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
    imagePath: `${consultant.image}`,
  }));

  function handleDropdown(e, data) {
    setConsultant(data.value);
    storeInLocalStorage({ name: "selectedConsultant", value: data.value });
    // dispatch({ type: UPDATE_CONSULTANT, payload: data.value });
    setConsultantDetails({
      desc: data.options.find((el) => el.value === data.value).desc,
      name: data.options.find((el) => el.value === data.value).text,
      role: data.options.find((el) => el.value === data.value).role,
      image: data.options.find((el) => el.value === data.value).imagePath,
      services: data.options.find((el) => el.value === data.value).services,
    });
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
        {consultantDetails.desc ? (
          <Segment secondary>
            <Card centered>
              <Image
                src={`/images/${consultantDetails.image}`}
                size="small"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{consultantDetails.name}</Card.Header>
                <Card.Meta>{consultantDetails.role}</Card.Meta>
              </Card.Content>
            </Card>
            <p>{consultantDetails.desc}</p>

            <p>{consultantDetails.services}</p>
          </Segment>
        ) : null}
        {consultant ? <LoadCalendar consultant={consultant} /> : null}
      </Container>
    </>
  );
};

export default BookConsultantSelect;
