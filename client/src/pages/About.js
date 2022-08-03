import React from "react";
import {
  Segment,
  Grid,
  Card,
  Header,
  List,
  Container,
  Divider,
} from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { GET_CONSULTANTS } from "../utils/queries";

import AboutConsultants from "../components/AboutConsultants";
import LoaderComp from "../components/LoaderComp";
import ErrorMessage from "../components/ErrorMessage";

const About = () => {
  const { loading, error, data } = useQuery(GET_CONSULTANTS);

  if (loading) {
    return <LoaderComp />;
  }
  if (error) {
    return <ErrorMessage header="error" message={error.message} />;
  }

  return (
    <>
      <Container text>
        <Segment stacked textAlign="center">
          Kamalayan
          <p>n .Tagalog.</p>
          <p>
            root word: <strong>málay</strong>
          </p>
          <p>
            <em>/ka- + malay + -án/</em>
          </p>
          awareness, consciousness, cognizance, recognition
        </Segment>
        <Divider hidden />
        <Grid centered columns={2} stackable>
          <Grid.Column>
            <Card centered fluid>
              <Card.Content header="Our Mission" textAlign="center" />
              <Card.Content>
                Kamalayan Therapy Services Inc. is a safe space for clients to
                grow and develop the kamalayan or consciousness to know
                themselves. We offer targeted psychotherapy methods and
                evidenced-based therapy to guide individuals, couples and
                families on a self-discovery journey to feeling better and
                learning effective ways of coping with diverse situations.
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered fluid>
              <Card.Content header="Our Vision" textAlign="center" />
              <Card.Content>
                All clients can have a convenient, affordable, and stigma-free
                access to mental health support, which will cater their unique
                needs and will allow them to grow as a compassionate human
                being.
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered fluid>
              <Card.Content header="Our Values" textAlign="center" />
              <Card.Content centered>
                <List bulleted textAlign="left">
                  <List.Item>Commitment</List.Item>
                  <List.Item>Integrity</List.Item>
                  <List.Item>Compassion</List.Item>
                  <List.Item>Quality</List.Item>
                  <List.Item>Empowerment</List.Item>
                  <List.Item>Authenticity</List.Item>
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <Divider hidden />
        <Header as="h2" textAlign="center" dividing>
          Our Consultants
        </Header>
      </Container>
      <Divider hidden />

      <Grid verticalAlign="middle" columns={3} centered stackable>
        {data.getConsultants.map((consultant) => (
          <AboutConsultants
            fullName={consultant.fullName}
            key={consultant._id}
            description={consultant.description}
            role={consultant.role}
            services={consultant.services}
            image={consultant.image}
          />
        ))}
      </Grid>
    </>
  );
};

export default About;
