import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Grid, Button } from "semantic-ui-react";
import HomeIssues from "../components/HomeIssues";
import HomeServices from "../components/HomeServices";
// import header from "../assets/img/kamalayan-header.png";

const Home = () => {
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

  // const [toggle, setToggle] = useState(true);

  return (
    <>
      <Grid container columns={2} doubling stackable centered>
        <Grid.Column>
          <Header
            size="huge"
            content="Kamusta"
            textAlign="center"
            style={style.h3}
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
        <Grid.Row>
          <Header
            size="large"
            content="Common Issues dealt in therapy"
            textAlign="center"
            style={style.h2}
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
            style={style.h2}
          />
        </Grid.Row>
      </Grid>
      <HomeServices />
      <Grid container columns={2} stackable centered>
        <Header as="h1" textAlign="center" style={style.h3}>
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
