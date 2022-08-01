import React from "react";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";

const ClientList = (clientDetails) => {
  const { fullName, scheduleDate, concern, id } = clientDetails;
  return (
    <Item>
      <Item.Image src={"/images/image.png"} />
      <Item.Content>
        <Link to={`/profile/client/${id}`}>
          <Item.Header>{fullName}</Item.Header>
        </Link>
        <Item.Meta>
          <span>
            Scheduled Appointment:{" "}
            {new Date(scheduleDate).toLocaleString("en-GB", {
              timezone: "Australia/Sydney",
            })}
          </span>
        </Item.Meta>
        <Item.Description>Primary Concern: {concern}</Item.Description>
      </Item.Content>
    </Item>
  );
};

export default ClientList;
