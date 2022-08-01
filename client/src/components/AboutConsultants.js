import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";

const AboutConsultants = (props) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Image centered src={`/images/${props.image}`} size="medium" />
      </Grid.Column>
      <Grid.Column>
        <Header size="medium" textAlign="center" dividing>
          {props.fullName}
          <Header.Subheader>{props.role}</Header.Subheader>
        </Header>
        {props.description}

        <Header size="tiny">{props.services}</Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default AboutConsultants;
