import React from "react";
import { Header, Image, Grid } from "semantic-ui-react";
const services = [
  {
    service: "Group Therapy",
    image: "/images/home-group.jpeg",
    key: 1,
  },
  {
    service: "Individual Therapy",
    image: "/images/home-individual.jpeg",
    key: 2,
  },
  {
    service: "Social Skills Group",
    image: "/images/home-socskills.jpeg",
    key: 3,
  },
  {
    service: "Family Therapy",
    image: "/images/home-familytherapy.jpeg",
    key: 4,
  },
  {
    service: "Couples Therapy",
    image: "/images/home-couplestherapy.jpeg",
    key: 5,
  },
  {
    service: "Personal Development Workshop",
    image: "/images/home-personaldev.jpeg",
    key: 6,
  },
];
const HomeServices = () => {
  return (
    <>
      <Grid columns={3} stackable>
        {services.map((service) => (
          <Grid.Column key={service.key}>
            <Header size="medium" textAlign="center" dividing>
              {service.service}
            </Header>
            <Image src={`${service.image}`} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default HomeServices;
