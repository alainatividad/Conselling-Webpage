import React from "react";
import { Header, Image, Grid, Button } from "semantic-ui-react";
import HomeIssues from "../components/HomeIssues";
import HomeServices from "../components/HomeServices";
// import header from "../assets/img/kamalayan-header.png";

const Home = () => {
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

  // const [toggle, setToggle] = useState(true);

  return (
    <div style={style.h1}>
      <Grid container columns={2} doubling stackable centered>
        <Grid.Column>
          <Header
            as="h1"
            content="Hello/Welcome/Kamusta"
            textAlign="center"
            style={style.h1}
          />
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </Grid.Column>
        <Grid.Column>
          <Image src={"/images/home-welcome.jpg"} fluid />
        </Grid.Column>
      </Grid>
      <HomeIssues />
      <HomeServices />
      <Grid container columns={2} style={style.h1}>
        <Grid.Column>
          <Header as="h1" textAlign="center">
            Judgement-free zone, come as you are
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Button color="pink" size="large" content="Book Now" />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Home;
