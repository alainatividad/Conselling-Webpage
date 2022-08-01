import React from "react";
import { Container, Item } from "semantic-ui-react";
import ClientList from "./ClientList";

const ConsultantProfile = (props) => {
  const clientList = props.clients || [];
  console.log(clientList);

  return (
    <Container>
      {clientList.length > 0 ? (
        <>
          <h3>Clients</h3>
          <Item.Group divided>
            {clientList.map((client) => (
              <ClientList
                fullName={client.fullName}
                scheduleDate={client.scheduleDate}
                concern={client.concern}
                key={client._id}
                id={client._id}
              />
            ))}
          </Item.Group>
        </>
      ) : null}
      update availability?
    </Container>
  );
};

export default ConsultantProfile;
