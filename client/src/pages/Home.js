import React from "react";
import { Link } from "react-router-dom";
import { Divider, Header, Image, Grid, Button } from "semantic-ui-react";
import HomeIssues from "../components/HomeIssues";
import HomeServices from "../components/HomeServices";
// import header from "../assets/img/kamalayan-header.png";

const Home = () => {
  return (
    <>
      <Grid container columns={2} doubling stackable centered>
        <Grid.Column>
          <Divider hidden />
          <Divider hidden />
          <Header size="huge" content="Kumusta?" textAlign="center" as="h3" />
          <Divider hidden />
          <Divider hidden />
          <p>
            Kamalayan Therapy Services bridges this gap between client and
            consultant, giving individuals agency to choose the consultant that
            would best cater to their needs, eliminate unnecessary wait times in
            booking a session, and confidentially doing it at that, while
            consultants gain more visibility on their schedule real-time and the
            confidence they will not be double-booked.
          </p>
          <p>
            This is therapy made simpler, so we invite you all to take charge of
            your mental health with Kamalayan.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Image src={"/images/home-welcome.jpg"} fluid />
        </Grid.Column>
        <Grid.Row>
          <Header
            size="large"
            content="Common Issues dealt in therapy"
            textAlign="center"
            as="h2"
            style={{ margin: "2em" }}
          />
        </Grid.Row>
        <Grid.Row>
          <HomeIssues />
        </Grid.Row>
        <Grid.Row>
          <Header
            size="large"
            content="Our Services"
            textAlign="center"
            as="h2"
            style={{ margin: "2em" }}
          />
        </Grid.Row>
      </Grid>
      <HomeServices />
      <Grid container columns={2} stackable centered>
        <Header as="h1" textAlign="center" style={{ marginTop: "2em" }}>
          This is a judgement-free zone, come as you are
        </Header>
        <Grid.Column verticalAlign="middle" centered>
          <Link to={`/login`}>
            <Button fluid size="massive">
              Book Now
            </Button>
          </Link>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Home;
