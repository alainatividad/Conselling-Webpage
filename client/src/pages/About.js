import React, { useEffect } from "react";
import { Segment, Grid, Card, Header } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { GET_CONSULTANTS } from "../utils/queries";
import { useUserContext } from "../utils/UserContext";
import { UPDATE_CURRPAGE } from "../utils/actions";
import LoaderComp from "../components/LoaderComp";
import AboutConsultants from "../components/AboutConsultants";

const About = () => {
  // get user state
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    dispatch({ type: UPDATE_CURRPAGE, payload: "about" });
  }, []);

  const { loading, error, data } = useQuery(GET_CONSULTANTS);

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

  return (
    <>
      <Grid centered columns={2} stackable>
        <Grid.Column>
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
        </Grid.Column>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Card centered fluid>
              <Card.Content header="Our Mission" textAlign="center" />
              <Card.Content>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered fluid>
              <Card.Content header="Our Vision" textAlign="center" />
              <Card.Content>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={5}>
          <Card centered fluid>
            <Card.Content header="Our Values" textAlign="center" />
            <Card.Content>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
      <Header as="h2" textAlign="center">
        <div>Our Consultants</div>
      </Header>
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
