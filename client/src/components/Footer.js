import React from "react";
import { HashLink as Link } from "react-router-hash-link";
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
      <Grid columns={4} divided stackable inverted centered>
        <Grid.Row>
          <Grid.Column position="center">
            <Image
              src={"/images/kamalayan-logo-ho.png"}
              size="small"
              centered
            />
          </Grid.Column>
          <Grid.Column position="center">
            <Header inverted as="h4" content="Extra Links" />
            <List link inverted>
              <List.Item as={Link} to="/about">
                About Us
              </List.Item>
              <List.Item as={Link} to="/about/#OurConsultants">
                Our Team
              </List.Item>
              <List.Item as={Link} to="/sign-up">
                Book Appointment
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column position="center">
            <Header inverted as="h4" content="Get in Touch" />
            <List inverted>
              <List.Item
                icon="marker"
                content="61 Walter Crescent, Koonawarra, New South Wales"
              />
              <List.Item icon="phone" content="(02) 4286 9345" />
              <List.Item
                icon="mail"
                content={
                  <a href="mailto:hello@kamalayan.com.au">
                    hello@kamalayan.com.au
                  </a>
                }
              />
            </List>
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
