import React from "react";
import { Header, Image, Card } from "semantic-ui-react";

const HomeIssues = () => {
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
        content="Common Issues dealt in therapy"
        textAlign="center"
        style={style.h1}
      />
      <Card.Group centered>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-anger.jpg"} />
          <Card.Content>
            <Card.Header textAlign="center">Anger</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-depression.jpg"} />
          <Card.Content>
            <Card.Header textAlign="center">Depression</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-anxiety.jpg"} />
          <Card.Content>
            <Card.Header textAlign="center">Anxiety</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-alcohol.jpg"} />
          <Card.Content>
            <Card.Header textAlign="center">Alcohol and Drug Abuse</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-trauma.jpg"} />
          <Card.Content>
            <Card.Header textAlign="center">Trauma</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-grief.jpg"} />
          <Card.Content>
            <Card.Header textAlign="center">Grief</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image
            wrapped
            ui={false}
            fluid
            src={"/images/home-relationship.jpg"}
          />
          <Card.Content>
            <Card.Header textAlign="center">Relationship Issues</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-family.jpg"} />
          <Card.Content>
            <Card.Header textAlign="center">Family Issues</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-selfesteem.jpg"} />
          <Card.Content>
            <Card.Header textAlign="center">Self-esteem</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} fluid src={"/images/home-social.jpg"} />
          <Card.Content>
            <Card.Header textAlign="center">Social Skills</Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
};

export default HomeIssues;
