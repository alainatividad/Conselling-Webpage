import React from "react";
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Image,
  Divider,
} from "semantic-ui-react";
// import footerImg from "../assets/img/kamalayan-logo-h.png";

const Footer = () => (
  <Segment
    inverted
    style={{
      margin: "5em 0em 0em",
      padding: "2em 0em",
    }}
    vertical
  >
    <Container textAlign="center">
      <Grid columns="equal" divided stackable inverted centered>
        <Grid.Row>
          <Grid.Column position="center">
            <Image
              src={"/images/kamalayan-logo-ho.png"}
              size="small"
              centered
            />
          </Grid.Column>
          {/* <Grid.Column position="center">
            <Header inverted as="h4" content="Group 2" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column position="center">
            <Header inverted as="h4" content="Group 3" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column> */}
          <Grid.Column position="center">
            <Header
              inverted
              as="h4"
              content="Kamalayan Therapy Services"
              textAlign="center"
            />
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider inverted section />
      <List horizontal inverted divided link size="small">
        <List.Item as="a" href="#">
          Site Map
        </List.Item>
        <List.Item as="a" href="#">
          Contact Us
        </List.Item>
        <List.Item as="a" href="#">
          Terms and Conditions
        </List.Item>
        <List.Item as="a" href="#">
          Privacy Policy
        </List.Item>
      </List>
    </Container>
  </Segment>
);

export default Footer;
