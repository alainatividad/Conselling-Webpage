import React from "react";
import { Header, Image, Card } from "semantic-ui-react";

const HomeServices = () => {
  const style = {
    h1: {
      margin: "2em",
    },
    h2: {
      margin: "4em 0em 2em",
    },
    h3: {
      marginTop: "2em",
      padding: "2em 0em",
    },
    last: {
      marginBottom: "300px",
    },
  };
  return (
    <>
      <Header
        as="h1"
        content="Our Services"
        textAlign="center"
        style={style.h1}
      />
      <Card.Group centered itemsPerRow={3}>
        <Card>
          <Image
            wrapped
            ui={false}
            fluid
            src={"/images/home-individual.jpeg"}
          />
          <Card.Content>
            <Card.Header textAlign="center">Individual Therapy</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-group.jpeg"} />
          <Card.Content>
            <Card.Header textAlign="center">Group Therapy</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-socskills.jpeg"} />
          <Card.Content>
            <Card.Header textAlign="center">Social Skills Group</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image
            wrapped
            ui={false}
            fluid
            src={"/images/home-familytherapy.jpeg"}
          />
          <Card.Content>
            <Card.Header textAlign="center">Family Therapy</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image
            wrapped
            ui={false}
            fluid
            src={"/images/home-couplestherapy.jpeg"}
          />
          <Card.Content>
            <Card.Header textAlign="center">Couples Therapy</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image
            wrapped
            ui={false}
            fluid
            src={"/images/home-personaldev.jpeg"}
          />
          <Card.Content>
            <Card.Header textAlign="center">
              Personal Development Workshop
            </Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
};

export default HomeServices;
