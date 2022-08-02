import React, { useEffect } from "react";
import { Grid, List, Header } from "semantic-ui-react";
import { useUserContext } from "../utils/UserContext";
import { UPDATE_CURRPAGE } from "../utils/actions";

const Services = () => {
  const style = {
    h2: {
      margin: "2em 0em 2em",
    },
    h3: {
      margin: "2em",
    },
    last: {
      marginBottom: "300px",
    },
  };
  // get user state
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    dispatch({ type: UPDATE_CURRPAGE, payload: "services" });
  }, []);

  return (
    <>
      <Grid container columns={3} doubling stackable centered>
        <Grid.Row>
          <Header
            size="large"
            content="Evidence-based Treatments"
            textAlign="center"
            // style={style.h2}
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
