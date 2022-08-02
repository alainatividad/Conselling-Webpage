import React from "react";
import { Grid, List, Header } from "semantic-ui-react";
import { storeInLocalStorage } from "../utils/helper";

const Services = () => {
  // get user state
  storeInLocalStorage({ name: "current_page", value: "services" });

  return (
    <>
      <Grid container columns={3} doubling stackable centered>
        <Grid.Row>
          <Header
            size="large"
            content="Evidence-based Treatments"
            textAlign="center"
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="left">
            <List bulleted>
              <List.Item>CBT</List.Item>
              <List.Item>DBT</List.Item>
              <List.Item>ACT</List.Item>
              <List.Item>SFBT</List.Item>
              <List.Item>Narrative Therapy</List.Item>
              <List.Item>Sandplay/Play Therapy</List.Item>
              <List.Item>Imago Therapy</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Services;
